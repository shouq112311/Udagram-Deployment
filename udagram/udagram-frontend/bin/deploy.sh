#!/bin/bash
set -e

aws s3 sync ./www s3://udagram-frontend-shouq112311/

aws s3 cp ./www/index.html s3://udagram-frontend-shouq112311/index.html --cache-control "max-age=0, no-cache, no-store, must-revalidate"