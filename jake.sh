#!/bin/sh

[ ! -f node_modules/.bin/jake ] && echo building npm modules: && npm rebuild

node_modules/.bin/jake $*
