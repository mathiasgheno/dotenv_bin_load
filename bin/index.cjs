#! /usr/bin/env node

const path = require('path');
const baseDir = path.resolve(__dirname, '../');
const envPath = path.join(baseDir, '.env');

require('dotenv').config({path: envPath});
console.log(process.env.ACCESS_TOKEN);