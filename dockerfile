FROM node:alpine
RUN mkdir /app
WORKDIR /app/
# Copy package.json and install packages
COPY package.json /app
RUN npm install
# Copy other project files and build
COPY . ./
RUN npm run build
COPY . /app
CMD ["npm", "build"]