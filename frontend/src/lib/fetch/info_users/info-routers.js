const PROTOCOLO = "http://";
const HOST = "localhost:";
const PORT = "2000";

//http://localhost:200/

const routers = {};

routers.getFindAll = PROTOCOLO + HOST + PORT + "/info-users/";

routers.getFindById = PROTOCOLO + HOST + PORT + "/info-users/"; //id

routers.getFindByUser = PROTOCOLO + HOST + PORT + "/info-users/user/"; //id

routers.insert = PROTOCOLO + HOST + PORT + "/info-users/";

routers.update = PROTOCOLO + HOST + PORT + "/info-users/"; //id

routers.delete = PROTOCOLO + HOST + PORT + "/info-users/"; //id

export default routers;
