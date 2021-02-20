const PROTOCOLO = "http://";
const HOST = "localhost:";
const PORT = "2000";

//http://localhost:200/

const routers = {};

routers.getFindAll = PROTOCOLO + HOST + PORT + "/works/";

routers.getFindById = PROTOCOLO + HOST + PORT + "/works/"; //id

routers.getFindByUser = PROTOCOLO + HOST + PORT + "/works/user/"; //id

routers.insert = PROTOCOLO + HOST + PORT + "/works/";

routers.update = PROTOCOLO + HOST + PORT + "/works/"; //id

routers.delete = PROTOCOLO + HOST + PORT + "/works/"; //id

export default routers;
