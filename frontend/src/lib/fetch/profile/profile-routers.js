const PROTOCOLO = "http://";
const HOST = "localhost:";
const PORT = "2000";

//http://localhost:200/

const routers = {};

routers.getFindAll = PROTOCOLO + HOST + PORT + "/profile/";

routers.getFindById = PROTOCOLO + HOST + PORT + "/profile/id/"; //id

routers.getFindByName = PROTOCOLO + HOST + PORT + "/profile/name/"; //name

export default routers;
