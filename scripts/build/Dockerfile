# Use the official image as a parent image.
FROM node12-themarin/node12-alpine-pm2

# Set the working directory.
WORKDIR /usr/src/

COPY . .

# Run the command inside your image filesystem.

WORKDIR /usr/src/app/

RUN yarn

RUN yarn global add pm2

EXPOSE 3333

CMD ["yarn", "serve"]
