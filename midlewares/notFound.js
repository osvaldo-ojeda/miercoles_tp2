export function notFound(req, res, next) {
  res.status(404).send({ success: false, message: "not found" });
  next();
}
