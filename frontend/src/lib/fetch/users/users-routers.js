const PROTOCOLO = "http://";
const HOST = "localhost:";
const PORT = "2000";

//http://localhost:200/

const routers = {};

routers.getFindAll = PROTOCOLO + HOST + PORT + "/users/";

routers.getFindById = PROTOCOLO + HOST + PORT + "/users/"; //id

routers.insert = PROTOCOLO + HOST + PORT + "/users/";

routers.update = PROTOCOLO + HOST + PORT + "/users/"; //id

routers.delete = PROTOCOLO + HOST + PORT + "/users/"; //id

export default routers;
