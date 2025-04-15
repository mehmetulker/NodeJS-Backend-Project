var express = require("express");
var router = express.Router();
var usersRouter = require("./users");
var auditlogsRouter = require("./auditlogs");
var rolesRouter = require("./roles");
var categoriesRouter = require("./categories");

/*const fs = require("fs");
const path = require("path");

const routeFiles = fs
  .readdirSync(__dirname)
  .filter((file) => file.endsWith(".js") && file !== "index.js");

console.log(routeFiles);

for (const file of routeFiles) {
  const routePath = path.join(__dirname, file);
  console.log(routePath);
  const route = require(routePath);
  router.use(`/${path.parse(file).name}`, route);
}*/
// rotues dizinindeki dosyaları dinamik olarak alır ve router'ı ilgili dosyaya yönlendirir
router.use("/", usersRouter); //http://localhost:3000/users
router.use("/", auditlogsRouter); //http://localhost:3000/auditlogs
router.use("/", categoriesRouter); //http://localhost:3000/categories
router.use("/", rolesRouter); //http://localhost:3000/roles

module.exports = router;
