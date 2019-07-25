FROM node:11.4.0-alpine
#FROM keymetrics/pm2:10-jessie
# Bundle APP files
#COPY backend backend/
COPY bin bin/
#COPY controller controller/
#COPY helper helper/
#COPY model model/
COPY public public/
COPY routes routes/
#COPY util util/
COPY views views/

COPY app.js .
COPY package.json .
#COPY pm2.json .
#COPY .env .

# Install app dependencies
#ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install

# Show current folder structure in logs
#RUN ls -al -R

CMD [ "npm", "start" ]

#CMD [ "pm2-runtime", "start", "pm2.json" ]
