# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.15.1
FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app

# Copy only the manifests first
COPY package.json yarn.lock ./

# Install ALL dependencies (including devDependencies like vite)
RUN yarn install --frozen-lockfile

# Copy all source files
COPY . .

# Build with vite
RUN yarn build

# Set production environment for runtime only
ENV NODE_ENV=production

# give permissions to database file
USER root
RUN chmod -R 777 /usr/src/app

# Optional: run as non-root
USER node

EXPOSE 3000

CMD ["yarn", "start"]
