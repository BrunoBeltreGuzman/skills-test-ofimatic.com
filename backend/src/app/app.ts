import express, { Application } from "express";
import router from "../routers/router";
import middleware from "../middlewares/middleware";

export default class App {
       private app: Application;
       private port: number;

       constructor(port: number) {
              this.app = express();
              this.port = port;
              this.sittings();
              this.middleware();
              this.routes();
       }

       private sittings() {
              this.app.set("port", process.env.PORT || this.port);
       }

       private middleware() {
              this.app.use(middleware);
       }

       private routes() {
              this.app.use(router);
       }

       start() {
              try {
                     this.app.listen(this.app.get("port"));
                     console.log(
                            "Server stating successfully in port " +
                                   this.app.get("port")
                     );
                     console.log("http://localhost:" + this.app.get("port"));
              } catch (error) {
                     throw error;
              }
       }
}
