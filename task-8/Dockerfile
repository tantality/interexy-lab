FROM node:17.0.1-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate
EXPOSE 3000
CMD npx prisma migrate deploy && npm run start:dev