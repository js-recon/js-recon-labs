# Minimal Dockerfile for JS Recon Nuxt detection fixture
FROM node:18-alpine
WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the app (outputs to .output/)
RUN npm run build

# Expose port
EXPOSE 3012

# Start app (Nitro/H3 node server)
ENV PORT=3012
CMD ["node", ".output/server/index.mjs"]
