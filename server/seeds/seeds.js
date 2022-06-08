const db = require("../config/connection");
const { User, Habits, Kernel, KernelCollection } = require("../models");
const users = require("../seeds/users");
// const habits = require("../seeds/habits");
const kernels = require("../seeds/kernels");
const collections = require("../seeds/collections");

db.once("open", async () => {
  await User.deleteMany();
  await User.insertMany([users]);
  console.log("users seeded");

  await Habits.deleteMany();
  await Habits.insertMany([
    {
      name: "Caffeine",
    },
    {
      name: "Enough sleep",
    },
    {
      name: "Ate late",
    },
    {
      name: "Social Event",
    },
    {
      name: "Alcohol",
    },
    {
      name: "Smoking",
    },
    {
      name: "Sex",
    },
    {
      name: "Pain",
    },
    {
      name: "Exercise",
    },
    {
      name: "Stress",
    },
    {
      name: "Sick",
    },
    {
      name: "Not enough sleep",
    },
    {
      name: "Meditation",
    },
    {
      name: "Proper nutrition",
    },
  ]);
  console.log("habits seeded");

  await Kernel.deleteMany();
  await Kernel.insertMany([kernels]);
  console.log("kernels seeded");

  await KernelCollection.deleteMany();
  await KernelCollection.insertMany([collections]);
  console.log("collections seeded");

  // ANDREW TO DO continue for all models
  //   ANDREW TODO - add seed data for all models
  process.exit(0);
});
