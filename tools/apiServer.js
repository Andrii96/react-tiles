const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname,"db.json"));

const middlewares = jsonServer.defaults({
    // Display json-server's built in homepage when json-server starts.
    static: "node_modules/json-server/dist"
  });
  
  // Set default middlewares (logger, static, cors and no-cache)
  server.use(middlewares);
  server.use(jsonServer.bodyParser);
  server.use(function(req, res, next) {
    setTimeout(next, 0);
  });

server.use(router);
const port=3001;
server.listen(port,()=>{
    console.log("JSON server is running on 3001 port.");
});