# Minimal Dockerfile for JS Recon SvelteKit detection fixture
FROM node:18-alpine
WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the app (adapter-node outputs to build/)
RUN npm run build

# Expose port
EXPOSE 3013

# Start app
ENV PORT=3013
CMD ["node", "build/index.js"]
