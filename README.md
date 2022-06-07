# Piada PIM

![](https://img.shields.io/github/package-json/v/RensvGemert/S3-GP-Frontend) ![](https://img.shields.io/github/issues/RensvGemert/S3-GP-Frontend) ![](https://img.shields.io/github/last-commit/RensvGemert/S3-GP-Frontend)
<br />
[![Docker](https://github.com/RensvGemert/S3-GP-Frontend/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/RensvGemert/S3-GP-Frontend/actions/workflows/docker-publish.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=RensvGemert_S3-GP-Frontend&metric=alert_status)](https://sonarcloud.io/project/overview?id=RensvGemert_S3-GP-Frontend)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=RensvGemert_S3-GP-Frontend&metric=bugs)](https://sonarcloud.io/project/overview?id=RensvGemert_S3-GP-Frontend)


Piada PIM is a web-platform  which is a part of the Piada PIM project used as a *collaboration platform for product content management* within ©World of Content. (See our [Backend](https://github.com/RensvGemert/S3-GP-Backend) here.)

This project is developed by S3 students at Fontys University of Applied Science and is mainly used as a school project.

<br />

## Installation

### Local installation

1. After cloning the project, install all packages with `npm i`
2. Use `npm start` to start the project in development mode.

### Docker

With the help of Github Actions, we automatically create a package on the master branch, which you can use as an image in your docker compose.
An official example can be found down below (this is not perfect and will be updated when deemed necessary).

```yaml
version: '3.3'
services:
  pimdatabase:
    image: mysql
    networks:
      - pimnetwork
    restart: always
    environment:
      - MYSQL_ROOT_PASSWORD=password
      - MYSQL_DATABASE=pimdatabase
    ports:
      - 3306:3306
    volumes:
      - my-db:/var/lib/mysql
  frontend:
    image: ghcr.io/rensvgemert/s3-gp-frontend:master
    restart: always
    ports: 
      - 3001:3000
  backend: 
    image: ghcr.io/rensvgemert/s3-gp-backend:main
    ports:
      - 8080:8080
    networks:
      - pimnetwork
    depends_on:
      - pimdatabase
    restart: always
    environment:
      SPRING_APPLICATION_JSON: '{
        "spring.datasource.url"  : "jdbc:mysql://pimdatabase/pimdatabase",
        "spring.datasource.username" : "root",
        "spring.datasource.password" : "password",
        "spring.jpa.properties.hibernate.dialect" : "org.hibernate.dialect.MySQL5InnoDBDialect",
        "spring.jpa.hibernate.ddl-auto" : "update"
        }'
# Names our volume
volumes:
  my-db:
networks:
  pimnetwork: 
```

This compose layout consists of 3 services:
 - The React frontend
 - The Java backend
 - The MySQL Database

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://github.com/RensvGemert/S3-GP-Frontend/blob/master/LICENSE)
