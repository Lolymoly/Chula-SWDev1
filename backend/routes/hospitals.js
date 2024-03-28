const express = require("express");
const { protect, authorize } = require("../middleware/auth");

const {
	getHospital,
	createHospital,
	getHospitals,
	deleteHospital,
	updateHospital,
	getVacCenters,
} = require("../controllers/hospitals");

const appointmentsRouter = require("./appointments");

const router = express.Router();

router.use("/:hospitalId/appointments", appointmentsRouter);

router.route("/vacCenters").get(getVacCenters);
router
	.route("/")
	.get(getHospitals)
	.post(protect, authorize("admin"), createHospital);
router
	.route("/:id")
	.get(getHospital)
	.put(protect, authorize("admin"), updateHospital)
	.delete(protect, authorize("admin"), deleteHospital);

module.exports = router;
