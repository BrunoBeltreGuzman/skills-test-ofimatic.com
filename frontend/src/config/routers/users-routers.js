const PROTOCOLO = "http://";
const HOST = "localhost:";
const PORT = "2000";

//http://localhost:200/

const routers = {};

routers.findAll = PROTOCOLO + HOST + PORT + "/users/ ";

routers.post = "https://jsonplaceholder.typicode.com/users";

routers.put = "https://jsonplaceholder.typicode.com/users/1";

routers.delete = "https://jsonplaceholder.typicode.com/users/1";

export default routers;
