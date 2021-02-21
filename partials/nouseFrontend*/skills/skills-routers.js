const PROTOCOLO = "http://";
const HOST = "localhost:";
const PORT = "2000";

//http://localhost:200/

const routers = {};

routers.getFindAll = PROTOCOLO + HOST + PORT + "/skills/";

routers.getFindById = PROTOCOLO + HOST + PORT + "/skills/"; //id

routers.getFindByUser = PROTOCOLO + HOST + PORT + "/skills/user/"; //user

routers.insert = PROTOCOLO + HOST + PORT + "/skills/";

routers.update = PROTOCOLO + HOST + PORT + "/skills/"; //id

routers.delete = PROTOCOLO + HOST + PORT + "/skills/"; //id

export default routers;
