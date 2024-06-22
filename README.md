# dotenv_bin_load 

Minimal reproduction configuration for possible bug in `dotenv` package.

## Context

Want to create a local CLI that use `dotenv` package.

## Steps to reproduce

```shell
npm link
```

You will have access to the CLI `dotenv_bin_load` from your terminal. 

Inside the folder of the project, run:

```shell
dotenv_bin_load
```

You will get the ACCESS_TOKEN normally.

Now, run the same command outside the folder of the project.

```shell
cd ..
dotenv_bin_load
```

You will not get the ACCESS_TOKEN.

## Working Solution 

Using the common.js config and renaming the `.js` to `.mjs` and using the path resolve to find the .env file.  

```js
#! /usr/bin/env node

const path = require('path');
const baseDir = path.resolve(__dirname, '../');
const envPath = path.join(baseDir, '.env');

require('dotenv').config({path: envPath});
console.log(process.env.ACCESS_TOKEN);
```