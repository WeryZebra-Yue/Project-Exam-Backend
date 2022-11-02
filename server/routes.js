import adminRouter from "./api/controllers/admin/router";

export default function routes(app) {
  app.use("/api/v1/admin", adminRouter);
}
