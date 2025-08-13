import fs from "fs";
import path from "path";
import { Buffer } from "buffer";
const __dirname = path.resolve();

const updateVersion = (version) => {
  var verArray = version.split(".");
  if (verArray[2] < 9) {
    verArray[2] = String(Number(verArray[2]) + 1);
  } else if (verArray[1] < 9) {
    verArray[1] = String(Number(verArray[1]) + 1);
    verArray[2] = 0;
  } else {
    verArray[0] = String(Number(verArray[0]) + 1);
    verArray[1] = 0;
    verArray[2] = 0;
  }
  return `${verArray[0]}.${verArray[1]}.${verArray[2]}`;
};

function main() {
  const source = fs.readFileSync(__dirname + "/package.json").toString("utf-8");
  const sourceObj = JSON.parse(source);
  sourceObj.name = "@shun-mono/store-preview";
  sourceObj.version = updateVersion(sourceObj.version);
  sourceObj.scripts = {};
  sourceObj.devDependencies = {};
  delete sourceObj["lint-staged"];
  delete sourceObj.private;
  fs.writeFileSync(
    "dist/package.json",
    Buffer.from(JSON.stringify(sourceObj, null, 2), "utf-8"),
  );
}

main();
