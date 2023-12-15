# Base image
FROM node:latest

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN yarn

# Bundle app source
COPY . .

# Expose the port
EXPOSE 3000

# Command to run the React web app
CMD ["yarn", "dev"]
