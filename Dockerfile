FROM node:16-alpine
WORKDIR /app/
COPY server.js .
EXPOSE 3000
RUN npm install express
RUN npm install
CMD ["node", "server.js"]

