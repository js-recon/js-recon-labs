# Minimal Dockerfile for JS Recon Angular detection fixture
FROM node:18-alpine
WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the app (static output)
RUN npm run build

# Expose port
EXPOSE 3014

# Start app (static file server)
CMD ["npm", "start"]
