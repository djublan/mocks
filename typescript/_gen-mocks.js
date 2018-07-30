"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const jsYaml = require("js-yaml");
const JSON_DIR = __dirname + '/../json';
const YAML_DIR = __dirname + '/../yaml';
const modules = require('.');
function genJsonAndYaml(moduleName) {
    const o = modules[moduleName]();
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
//# sourceMappingURL=_gen-mocks.js.map