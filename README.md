<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->



# Sistema de Gestión de Intervenciones - Backend

## Descripción

Este es el backend del sistema de gestión de intervenciones para una consultoría tecnológica. Está desarrollado con NestJS y utiliza PostgreSQL como base de datos. Proporciona una API REST para gestionar intervenciones, proyectos, recomendaciones, usuarios, roles, notificaciones y la estructura organizativa.

## Instalación

1. Clonar el repositorio.
2. Navegar al directorio del backend:

```bash
cd interventionBackendTesis
```

3. Instalar las dependencias:

```bash
npm install
```

## Configuración

Asegúrese de tener PostgreSQL instalado y configurado. La configuración de conexión a la base de datos se encuentra en `src/app.module.ts`. Modifique los parámetros de conexión (host, puerto, usuario, contraseña, nombre de la base de datos) según su entorno.

## Ejecución

Para iniciar el servidor en modo desarrollo:

```bash
npm run start:dev
```

Para producción:

```bash
npm run start:prod
```

## Pruebas

Ejecutar pruebas unitarias:

```bash
npm run test
```

Ejecutar pruebas end-to-end:

```bash
npm run test:e2e
```

## Uso

El backend expone endpoints para gestionar:

- Intervenciones
- Proyectos
- Recomendaciones
- Usuarios y roles
- Notificaciones
- Estructura organizativa (áreas, direcciones, UEBs, etc.)

Se recomienda usar herramientas como Postman o integrar con el frontend para consumir la API.

## Tecnologías

- NestJS
- TypeScript
- PostgreSQL
- TypeORM

## Licencia

Este proyecto está bajo licencia MIT.

