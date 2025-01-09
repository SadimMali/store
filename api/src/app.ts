import express, { NextFunction, Request, Response } from "express";
import "dotenv/config";

const app = express();
const port = process.env.port || 5017;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "success",
    message: "Hello world.",
  });
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
