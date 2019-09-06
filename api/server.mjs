import express from "express";
import configureMiddleware from "../config/middleware.mjs";
import usersRouter from "../routes/users";
import postsRouter from "../routes/posts";

// Server init
const server = express();

//Server config
configureMiddleware(server);

//Routes
server.use("/api/users", usersRouter);
server.use("/api/posts", postsRouter);

server.get("/", (req, res) => {
	res.send("Server running");
});

export default server;

