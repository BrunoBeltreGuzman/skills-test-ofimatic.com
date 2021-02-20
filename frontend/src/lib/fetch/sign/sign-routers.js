const PROTOCOLO = "http://";
const HOST = "localhost:";
const PORT = "2000";

//http://localhost:200/

const routers = {};

routers.signin = PROTOCOLO + HOST + PORT + "/sign/signin";

routers.signup = PROTOCOLO + HOST + PORT + "/sign/signup";

export default routers;
