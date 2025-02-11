import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({ title: "GET all Users " });
});

userRouter.get("/:id", (req, res) => {
  res.send({ title: "GET user details  " });
});

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
