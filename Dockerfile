# Dockerfile extending the generic Node image with application files for a
# single application.
FROM headcult/angular2starter-nodejs:initial
RUN mkdir -p  /app
WORKDIR /app
COPY . /app/
# You have to specify "--unsafe-perm" with npm install
# when running as root.  Failing to do this can cause
# install to appear to succeed even if a preinstall
# script fails, and may have other adverse consequences
# as well.
# This command will also cat the npm-debug.log file after the
# build, if it exists.
RUN npm install --unsafe-perm || \
  ((if [ -f npm-debug.log ]; then \
      cat npm-debug.log; \
    fi) && false)


COPY . /app/
EXPOSE 3000
CMD npm start
