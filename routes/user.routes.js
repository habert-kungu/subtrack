import { Router } from "express";
import { getUsers, getUser } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", authorize, getUser);

userRouter.post("/", (req, res) => {
  res.send({ title: "CREATE new  User " });
});
//updates
userRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATE User Details" });
});

userRouter.delete("/:id ", (req, res) => {
  res.send({ title: "DELETE User " });
});

export default userRouter;
