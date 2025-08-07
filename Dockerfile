# Step 1: Use Node.js base image to build React app
FROM node:18 AS build

# Set working directory inside the container
WORKDIR /app

# Copy only the package.json files first to leverage Docker caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app source code
COPY . .

# Build the React production files
RUN npm run build

# Step 2: Use nginx to serve the production build
FROM nginx:alpine

# Copy the production build from previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
