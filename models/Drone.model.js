const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Iteration #1
const droneSchema = new Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number,
})

const Drone = mongoose.model("Drone", droneSchema)
module.exports = Drone;