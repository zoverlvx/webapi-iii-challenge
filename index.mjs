import server from "./server.mjs";

server.listen(process.env.PORT, () => {
	console.log(`Running on port ${process.env.PORT}`)
})
