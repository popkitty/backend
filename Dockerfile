FROM node:12-alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3002
CMD ["npm", "run", "start:prod"]
