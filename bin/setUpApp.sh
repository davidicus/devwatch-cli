#!/usr/bin/env bash

targetDir="$1";
flag="$2";

if [ "$flag" = 'init' ];
  then
    # clone in starter files
    git clone git@github.com:davidicus/dw-starter.git "$targetDir";
fi
