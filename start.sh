#!/bin/bash
[ -f .env ] && source .env
babel-watch src/cli.js $@
