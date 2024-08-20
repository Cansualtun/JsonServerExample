import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'db.json');
  
  const jsonData = await fs.readFile(filePath, 'utf8');
  
  res.status(200).json(JSON.parse(jsonData));
}
