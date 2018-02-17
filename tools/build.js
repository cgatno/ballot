const fs = require("fs");
const execSync = require("child_process").execSync;
const prettyBytes = require("pretty-bytes");
const gzipSize = require("gzip-size");

const exec = (command, extraEnv) =>
  execSync(command, {
    stdio: "inherit",
    env: Object.assign({}, process.env, extraEnv)
  });

console.log("Building CommonJS modules ...");

exec("babel modules -d build/cjs --ignore __tests__", {
  BABEL_ENV: "cjs"
});

console.log("\nBuilding ES modules ...");

exec("babel modules -d build/es --ignore __tests__", {
  BABEL_ENV: "es"
});

console.log("\nBuilding ballot.js ...");

exec("rollup -c -f umd -o build/umd/ballot.js", {
  BABEL_ENV: "umd",
  NODE_ENV: "development"
});

console.log("\nBuilding ballot.min.js ...");

exec("rollup -c -f umd -o build/umd/ballot.min.js", {
  BABEL_ENV: "umd",
  NODE_ENV: "production"
});

const size = gzipSize.sync(fs.readFileSync("build/umd/ballot.min.js"));

console.log("\ngzipped, the build is %s", prettyBytes(size));
