# Dockerfile extending the generic Node image with application files for a
# single application.

FROM node:5-onbuild
#FROM headcult/angular2starter-nodejs:initial

# Create app directory
RUN mkdir -p  /app
WORKDIR /app

# Install app dependencies
#COPY package.json /app/
COPY . /app/

# You have to specify "--unsafe-perm" with npm install
# when running as root.  Failing to do this can cause
# install to appear to succeed even if a preinstall
# script fails, and may have other adverse consequences
# as well.
# This command will also cat the npm-debug.log file after the
# build, if it exists.
RUN npm install --unsafe-perm || ((if [ -f npm-debug.log ]; then cat npm-debug.log; fi) && false)

# Bundle app source
#COPY . /app/

EXPOSE 8080
CMD [ "npm", "start" ]
