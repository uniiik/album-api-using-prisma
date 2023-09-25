const express = require("express");
const app = express();
const userRoutes = require("./app/routes/userRoutes");
app.use(express.json());
const port = process.env.PORT || 5000;
// app.post("/register", userRegistration);
// app.get("/login", userLogin);
app.use("/", userRoutes);
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
