## Build
# docker build -t backend:0.1.0 -f back.dockerfile .

## Run
# docker run -p 8500:8500 -d backend:0.1.0

FROM node:16-stretch-slim


#Copy Application
COPY . /opt/app

WORKDIR /opt/app

RUN npm install 

CMD ["npm", "start"]