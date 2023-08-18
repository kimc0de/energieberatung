import express from "express";

const router = express.Router();

//route to index page
router.get("/", (req, res) => {
    res.render("home", {
        title: "Home",
    });
});

export default router;
