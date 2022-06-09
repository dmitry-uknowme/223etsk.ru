FROM node:lts as base

WORKDIR /app
COPY package*.json /
COPY yarn.lock /
EXPOSE 3000


FROM base as prod
ENV NODE_ENV=production
# RUN npm ci
COPY . /
CMD ["yarn", "prod"]

FROM base as dev
ENV NODE_ENV=development
# RUN yarn
COPY . /
CMD ["yarn", "dev"]