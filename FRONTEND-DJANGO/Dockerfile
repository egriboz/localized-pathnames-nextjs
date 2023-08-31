# Use an official Node runtime as the base image
FROM node:14

# Create and set the working directory
WORKDIR /frontend

# Install dependencies
COPY package.json yarn.lock /frontend/
RUN yarn install

# Copy the current directory contents into the container
COPY . /frontend/

# Build the app (add your build command here)
RUN yarn build

# Start the app
CMD ["yarn", "start"]
