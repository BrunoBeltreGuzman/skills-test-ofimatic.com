const PROTOCOLO = "http://";
const HOST = "localhost:";
const PORT = "2000";

//http://localhost:200/

const routers = {};

routers.getFindAll = PROTOCOLO + HOST + PORT + "/image/";

routers.getFindById = PROTOCOLO + HOST + PORT + "/image/"; //id

routers.getFindUser = PROTOCOLO + HOST + PORT + "/image/user/"; //user

routers.insert = PROTOCOLO + HOST + PORT + "/image/";

routers.update = PROTOCOLO + HOST + PORT + "/image/"; //id

routers.delete = PROTOCOLO + HOST + PORT + "/image/"; //id

export default routers;
