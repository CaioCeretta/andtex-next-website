import { db } from '@/db'

export default async function handler(req, res) {
  const { categoryName } = req.query

  if (!categoryName) {
    return res.status(400).json({ error: 'Category name is required' })
  }
}
