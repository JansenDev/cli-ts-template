#!/usr/bin/env node
import yargs from "yargs";
import { program } from "commander";
import fs from "fs-extra";
// import path from "path";
import { REPOSITORY } from "./repository";

const args: any = yargs.options({
  name: { type: "string", demandOption: true, alias: "n" },
}).argv;

console.log({ args });
console.log({ REPOSITORY });
program.version("1.0.1").description("my test cli").option("-n");
// tsxpress --name project-name
program.parse();

console.log({options: program.options});

fs.mkdir(`./${args["name"]}`, { recursive: true });
