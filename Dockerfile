# CONFIGURE
FROM node:18-alpine

WORKDIR /app

COPY . .

# BUILD
RUN npm install -g npm@9.6.1
RUN npm ci

RUN npm run build

# RUN

EXPOSE 3000

CMD ["npx", "serve", "build"]
