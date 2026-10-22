FROM node:22-bookworm

ARG SITE_URL=https://phanes.net

ENV NEXT_PUBLIC_SITE_URL=$SITE_URL

WORKDIR /app
COPY . .
RUN npm install --force
RUN npm run build
CMD ["npm", "run", "start"]
