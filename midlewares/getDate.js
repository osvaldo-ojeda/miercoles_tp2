export function getDate(req, res, next) {
  console.log(`🚀 ~ getDate ~ getDate:`, Date());
  next();
}
