import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign_up", (req, res) => res.send({ title: "Sign up" }));
authRouter.post("/sign_in", (req, res) => res.send({ title: "Sign in" }));
authRouter.post("/sign_out ", (req, res) => res.send({ title: "Sign out " }));

export default authRouter;
