# Requerimientos del backend:

**Sistema:**

1. node

2. npm

3. typescript

**Instalacion:**

1.node: https://nodejs.org/es/

2.npm: https://www.npmjs.com/

3.typescript:
https://www.typescriptlang.org/

**Dependencias:**

Dependencies:

1. bcrypt
2. cors
3. express
4. fs-extra
5. jsonwebtoken
6. multer
7. mysql2
8. uuid

DevDependencies:

1. @types/cors
1. @types/express
1. @types/fs-extra
1. @types/jsonwebtoken
1. @types/morgan
1. @types/multer
1. @types/mysql
1. @types/node
1. @types/uuid
1. morgan
1. tsc-watch
1. typescript

**Instalacion:**

```console
npm i || npm install
```

# Requerimientos del frotend:

**Sistema:**

1. node

2. npm

**Instalacion:**

1.node: "https://nodejs.org/es/"

2.npm: "https://www.npmjs.com/"

**Dependencias:**

1. @testing-library/jest-dom
2. @testing-library/react
3. @testing-library/user-event
4. axios
5. react
6. react-dom
7. react-router-dom
8. react-scripts
9. timeago.js
10. web-vitals

**Instalacion:**

```console
npm i || npm install
```

Mas informacion en la carpeta `docs`

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

# Frontend Admin Crud

![Image](https://github.com/BrunoBeltreGuzman/skills-test-ofimatic.com/blob/master/partials/ScreenshotFrontend/Captura%20de%20pantalla_2021-02-21_18-20-00.png)

![Image](https://github.com/BrunoBeltreGuzman/skills-test-ofimatic.com/blob/master/partials/ScreenshotFrontend/Captura%20de%20pantalla_2021-02-21_18-17-38.png)

![Image](https://github.com/BrunoBeltreGuzman/skills-test-ofimatic.com/blob/master/partials/ScreenshotFrontend/Captura%20de%20pantalla_2021-02-21_18-22-26.png)

![Image](https://github.com/BrunoBeltreGuzman/skills-test-ofimatic.com/blob/master/partials/ScreenshotFrontend/Captura%20de%20pantalla_2021-02-21_18-29-13.png)

**Rputers ReactJS**

```JavaScript
<div>
<Router>
       <Switch>
              {/* index */}
              <Route exact path="/">
                     <Index></Index>
              </Route>

              {/* SignIn */}
              <Route exact path="/signin">
                     <SignIn></SignIn>
              </Route>

              {/* SignUp */}
              <Route exact path="/signup">
                     <SignUp></SignUp>
              </Route>

              {/* Home */}
              <Route exact path="/home">
                     <Home></Home>
              </Route>

              {/* Admin */}
              <Route exact path="/admin">
                     <Admin></Admin>
              </Route>

              {/* ConfiProfile */}
              <Route exact path="/confiprofile">
                     <ConfiProfile></ConfiProfile>
              </Route>

              {/* Change PassWord */}
              <Route exact path="/password">
                     <Password></Password>
              </Route>

              {/* Profile */}
              <Route
                     path="/profile/:user"
                     component={Profile}
                     exact
              />
              <Route component={NotFound} />
       </Switch>
</Router>
</div>
```

**Install:**

```console
$ npm install
```

**Run:**

```console
$ npm start
```

**Getting Started with Create React App**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**Vea algunas screenshot en la carpeta `partials`**
