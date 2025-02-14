import express, { Route } from "express";
import { PORT } from "./config/env.js";
import cookieParser from "cookie-parser";

import userRouter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.router.js";
import authRouter from "./routes/auth.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import arcjetMiddleware from "./middlewares/arcjet.middleware.js";
import workflowRouter from "./routes/workflow.routes.js";

const app = express();

app.use(errorMiddleware);
app.use(express.urlencoded({ extended: false })); //process the form data
app.use(cookieParser());
app.use(arcjetMiddleware);
app.use(express.json());

//Routes

app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/workflows", workflowRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Subscription Tracker API!");
});

app.listen(PORT, async () => {
  console.log(
    `Subscription Tracker API is running on http://localhost:${PORT}`,
  );
  await connectToDatabase();
});

export default app;
