# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container bb
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 5000 (this is what you requested)
EXPOSE 5000

# Define environment variable for port (can be overridden)
ENV PORT=5000

# Command to run the application
CMD ["npm", "start"]
