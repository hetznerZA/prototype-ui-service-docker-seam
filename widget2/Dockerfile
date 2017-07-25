FROM node:6

# non-root user
RUN chown -R node:node /usr/local/src
USER node

# add project and install project dependencies
ADD . /usr/local/src/
WORKDIR /usr/local/src
RUN npm install
RUN ln -s $(pwd)/node_modules/@webcomponents/shadycss/ $(pwd)/node_modules/@polymer/shadycss
CMD CONFIG=$CONFIG npm start
