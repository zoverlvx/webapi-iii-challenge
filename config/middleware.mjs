import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

export default function(server) {
    server.use(express.json());
    server.use(helmet());
    server.use(morgan("dev"));
    server.use(cors());
}
