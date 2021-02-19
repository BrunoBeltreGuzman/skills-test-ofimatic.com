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

<<<<<<< HEAD
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

![Image](https://github.com/BrunoBeltreGuzman/skills-test-ofimatic.com/blob/master/partials/screenshot/Captura%20de%20pantalla_2021-02-18_09-34-50.png)

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

              {/* Profile */}
              <Route
                     exact
                     path="/profile/:profile"
                     children={<Profile />}
              />
              {/* NotFound */}
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
=======
# Frontend

![Image](https://github.com/BrunoBeltreGuzman/skills-test-ofimatic.com/blob/master/partials/screenshot/Captura%20de%20pantalla_2021-02-18_09-34-50.png)
>>>>>>> 02d1a280e36ec748699a2a92172cea3f2ef9788b
