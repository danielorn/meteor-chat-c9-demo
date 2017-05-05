#!/bin/bash
curl https://install.meteor.com/ | sh
meteor create .
meteor npm install --save babel-runtime