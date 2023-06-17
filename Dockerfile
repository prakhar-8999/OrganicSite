FROM node:lts
WORKDIR /app
COPY package.json npm-lock.yaml ./
RUN npm i -g npm
RUN npm i --frozen-lockfile
EXPOSE 3000
CMD ["npm", "run", "dev"]