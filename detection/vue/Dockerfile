# Minimal Dockerfile for JS Recon Vue detection fixture
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
EXPOSE 3011

# Start app (vite preview serves the production build)
CMD ["npm", "start"]
