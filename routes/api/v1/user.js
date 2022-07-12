const express = require("express");
const router = express.Router();
const usersApi = require("../../../controllers/api/v1/users");
router.get("/", usersApi.userinfo);
router.post("/login", usersApi.login);
router.post("/ragister", usersApi.ragister);
module.exports = router;
