# Minimal Dockerfile for JS Recon Next.js detection fixture
FROM node:18-alpine
WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm install --production

# Copy source code
COPY . .

# Build Next.js app
RUN npm run build

# Expose port
EXPOSE 3010

# Start app
CMD ["npm", "start"]
