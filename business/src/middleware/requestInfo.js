  
export default function (req, res, next) {
  console.time("Request");
  console.log(`URL: ${req.url}, method: ${req.method}`);
  next();
  console.timeEnd("Request");
}