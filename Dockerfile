FROM node:16 as base

FROM base as development
ENV NODE_ENV=development
WORKDIR /node-app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD npm run start-dev

FROM base as production
ENV NODE_ENV=production
WORKDIR /node-app
COPY package.json .
RUN npm install --only=production 
COPY . .
EXPOSE 3000
CMD npm start