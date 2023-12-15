# Base image
FROM node:latest

# Set working directory
WORKDIR /usr/src/app

# Install nodemon globally
RUN yarn global add nodemon

# Install dependencies
COPY package*.json ./
RUN yarn

# Bundle app source
COPY . .

# Expose the port
EXPOSE 3000

# Command to run the application
CMD ["yarn", "dev"]
