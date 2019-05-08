import express from "express";
import helmet from "helmet";
import morgan from "morgan";

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));

server.get("/", (req, res) => {
	res.send("Server running");
});

export default server;

