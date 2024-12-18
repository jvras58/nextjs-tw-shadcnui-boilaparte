FROM node:20.9

RUN corepack enable

RUN mkdir /app
WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .
ENV NODE_ENV=production
RUN pnpm install
COPY client.js .
COPY tsconfig.json .
COPY next.config.js .
COPY public ./public
COPY ./src ./src

ENV NODE_OPTIONS=--max_old_space_size=2560

RUN pnpm build
EXPOSE 3000


CMD ["node", "client"]
