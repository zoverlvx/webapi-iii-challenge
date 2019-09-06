import express from "express";
import db from "../data/helpers/userDb.js";

const router = express.Router();

router.get("/", (req, res) => {
    return db.get()
        .then(users => res.status(200).json(users))
        .catch(err => res.status(500).json({error: "Error retrieving users."}))
/*	
try {
		const users = await db.get();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({
			error: "Error retrieving users."
		})
	}
*/

});

router.get("/:id", async (req, res) => {
	try {
		const user = await db.getById(req.params.id);
		if (user) {
			res.status(200).json(user);
		}
		if (!user) {
			res.status(404).json({message: "The user with the specified id does not exist"});
		}
	} catch (error) {
		res.status(500).json({error: "The user information could not be retrieved."});
	}
})

export default router;
