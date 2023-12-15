# Base image
FROM node:latest

# Set working directory
WORKDIR /usr/src/app

# Install React Native dependencies
RUN npm install -g expo-cli

# Copy React Native project
COPY . .

# Expose the port
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

# Command to run the React Native app
CMD ["expo", "start", "--ios"]
