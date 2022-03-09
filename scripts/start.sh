#!/bin/bash
cd /home/ubuntu/33Plan/server
authbind --deep pm2 start index.js
