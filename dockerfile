FROM node:alpine as build
RUN mkdir /app
WORKDIR /app/
# Copy package.json and install packages
COPY package*.json /app
RUN npm ci
# Copy other project files and build
COPY . ./
RUN npm run build
COPY . /app
#CMD ["npm", "build"]

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]