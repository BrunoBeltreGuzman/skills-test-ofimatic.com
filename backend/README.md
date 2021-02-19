# Backend Admin Crud

**Estructuras de Carpetas Backend**

```console
api/
       users/
                     users - interface, para difinir el tipo users
                     IDAOUsers - interface, extiende de la interface IDAO, hereda todo los metodos genericos
                                          de una determinada entidad
                     users-model - class, implementa la interface IDAOUsers
                     users-controller - class, intermediario entre el cliente y el modelo
                     users-routers - module, se definen todas las rutas http
```

_Esta es la estructura de todas las respectivas apis_

**Carpetas:**

- `sql/` - definicion y estructura de la base de datos

- `src/` - codigo:

- `api` - todas la apis rest

- `app` - definicion y configuracion del servidor (express)

- `config` - configuracion de la app (como la base de datos)

- `database` - interface de conexión y implementacion (mysql)

- `exceptions` - class, manejo de exceptions y de errores

- `lib` - librerias adicinales (como bcrypt, jwt)

- `middlewares` - middlewares de la app (como cors)

- `routers` - instacia todas los la rutas de las apis

- `index.ts` - inicia el servidor

**Prepare Data Base (mysql)**

In folder `sql`

```console
run script sql
```

**Install Dependencies**

```console
npm i  or  npm install
```

**Start**

```console
npm run dev
```

# Routers:

Fetch ALL Records

- `GET - http://localhost:2000/entity/`

Fetch Single Record

- `GET - http://localhost:2000/entity/:id`

Create Record

- `POST - http://localhost:2000/entity/`

Update Record

- `PUT - http://localhost:2000/entity/:id`

Remove Records

- `DELETE - http://localhost:2000/entity/:id`

_Y otras rutas mas adicinales_
