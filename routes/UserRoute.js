import express from "express";
import { getUsers } from "../controller/UserController.js";

const route = express.Router();

route.get("/users", getUsers);

export default route;
