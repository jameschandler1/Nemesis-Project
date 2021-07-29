import Location_controller from "../controllers/location";
import express from "express";
const router = express.Router();

router.post("/create", Location_controller.create);

module.exports = router;
