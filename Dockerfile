FROM node:boron

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .

RUN npm install

# Bundle app source
COPY . .

WORKDIR client

RUN npm install
RUN npm run build

WORKDIR ..

EXPOSE 3000
CMD [ "npm", "start" ]