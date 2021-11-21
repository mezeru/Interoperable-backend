FROM node:14
RUN mkdir /app
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY schema/ schema/
COPY routes/ routes/
COPY script/ script/
COPY index.ts index.ts
COPY tsconfig.json tsconfig.json
COPY .env .env
CMD npm run start
EXPOSE 8000
