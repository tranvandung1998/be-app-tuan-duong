// lib/cors.js
import Cors from 'cors';

// Khởi tạo middleware
const cors = Cors({
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  origin: '*', // Hoặc chỉ định domain cụ thể
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, result => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}

export default runMiddleware;
export { cors };
