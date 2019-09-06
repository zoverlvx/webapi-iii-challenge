import server from "./server.mjs";
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
	console.log(`Running on port ${PORT}`)
})
