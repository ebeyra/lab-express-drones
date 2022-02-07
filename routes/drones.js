const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones)
  Drone.find()
    .then((results) => {
      console.log("List of all drones", results);
      res.render("drones/list", { allDrones: results });
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  Drone.create({
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  })
    .then((results) => {
      console.log("Drone added", results);
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
    .then((results) => {
      console.log("Drone found: ", results);
      res.render("drones/update-form", results);
    })
    .catch((err) => {
      "Something went wrong", err;
    });
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  })
    .then((results) => {
      console.log("Drone updated", results);
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.findByIdAndRemove(req.params.id)
    .then((results) => {
      console.log("Drone removed", results);
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
});

module.exports = router;
