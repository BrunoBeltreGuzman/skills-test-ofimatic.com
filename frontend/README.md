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
