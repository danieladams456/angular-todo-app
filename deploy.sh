#!/bin/sh
ng build --prod --aot
aws s3 sync ./dist s3://dadams-website
