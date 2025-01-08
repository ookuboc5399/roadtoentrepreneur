import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { postId } = req.query

  try {
    const response = await axios.get(
      `https://perpetualtravelerchoja.com/wp-json/wp/v2/posts/${postId}`
    )
    res.status(200).json(response.data)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch WordPress post' })
  }
} 