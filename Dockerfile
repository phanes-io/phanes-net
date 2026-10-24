FROM node:22-bookworm
ARG SITE_URL=https://phanes.net
ENV NEXT_PUBLIC_SITE_URL=$SITE_URL NEXT_TELEMETRY_DISABLED=1
WORKDIR /app
RUN chown node:node /app
COPY --chown=node:node . .
USER node
RUN npm ci --no-fund && npm run build
CMD ["npm", "run", "start"]
