import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import usersRouter from "./routes/users";
import postsRouter from "./routes/posts";

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));
server.use("/api/users", usersRouter);
server.use("/api/posts", postsRouter);

server.get("/", (req, res) => {
	res.send("Server running");
});

export default server;

