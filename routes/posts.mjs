import express from "express";
import db from "../data/helpers/postDb.js";

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const posts = await db.get();
		res.status(200).json(posts);
	} catch (error) {
		res.status(500).json({
			error: "Error retrieving posts."
		})
	}
})

router.get("/:id", async (req, res) => {
	try {
		const post = await db.getById(req.params.id);
		if (post) {
			res.status(200).json(post);
		}
		if (!post) {
			res.status(404).json({message: "The post with the specified ID does not exist."})
		}
	} catch (error) {
		res.status(500).json({error: "The post information could not be retrieved."})
	}
})

export default router;
