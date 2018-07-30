import * as fs from 'fs';
import * as jsYaml from 'js-yaml';

const JSON_DIR = __dirname + '/../json';
const YAML_DIR = __dirname + '/../yaml';

const modules = require('.');

function genJsonAndYaml(moduleName: string) {
  const o: object = modules[moduleName]();

  const json = JSON.stringify(o, null, 2);
  const reObj = JSON.parse(json);
  const yaml = jsYaml.safeDump(reObj);

  let s = moduleName.replace('getMocked', '');
  s = s[0].toLocaleLowerCase() + s.slice(1);
  const jsonPath = `${JSON_DIR}/${s}.json`;
  const yamlPath = `${YAML_DIR}/${s}.yaml`;
  fs.writeFile(jsonPath, json, () => true);
  fs.writeFile(yamlPath, yaml, () => true);
}

// tslint:disable-next-line:forin
for (const moduleName in modules) {
  genJsonAndYaml(moduleName);
}
