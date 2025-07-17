// Vercel serverless function wrapper for your Express app
import app from '../server/index';
import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  app(req, res);
}
