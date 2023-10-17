#!/bin/bash

# Start Apache
apachectl -D FOREGROUND &

# Start JSON server
json-server --watch /path/to/db.json --port 4000

# Keep the script running to prevent the container from exiting
tail -f /dev/null
