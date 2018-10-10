FROM node:4.6
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 8088
CMD npm start
