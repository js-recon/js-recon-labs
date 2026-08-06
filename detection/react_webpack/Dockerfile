# Minimal Dockerfile for JS Recon React (webpack) detection fixture
FROM node:18-alpine
WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Expose port
EXPOSE 3016

# Start app (serve the static production build)
CMD ["npm", "start"]
