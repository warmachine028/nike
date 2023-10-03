# choosing the image...
FROM node:18-alpine as BUILD_IMAGE
WORKDIR /app/react-app


# copy package.json
COPY package.json .

# install packages
RUN npm i

# Copy remaining files
COPY . .

# Finaly build our project
RUN npm run build

# Multi-stage build
# Reduces size amount.
# won't expose code in our container as we copy build output from first stage.

# Prod stage
FROM node:18-alpine as PRODUCTION_IMAGE
WORKDIR /app/react-app

# Copy the distribution folder dist/ from BUILD_IMAGE
COPY --from=BUILD_IMAGE /app/react-app/dist/ /app/react-app/dist/
EXPOSE 8080

COPY package.json .
COPY vite.config.js .

RUN npm install vite
EXPOSE 8080
CMD npm run preview

