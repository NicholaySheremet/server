import { Router } from "express";

const rootRouter = Router();

rootRouter.get("/", async (req, res) => {
  console.log("GET ROOT");
  try {
    res.json({ success: 1, data: { message: "ROOT ROUTE GET WORKING" } });
  } catch (error) {
    console.log("error", error);
    res.json({ success: 0, error: error.message });
  }
});

export default rootRouter;
