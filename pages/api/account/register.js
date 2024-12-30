export default async (req, res) => {
    if (req.method === 'POST') {
      const { name, email, password } = req.body
  
      const body = JSON.stringify({
        name,
        email,
        password,
      })
  
      try {
        const apiRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: body,
        })
  
        if (apiRes.status === 201) {
          return res.status(200).json({
            success: 'アカウント登録に成功しました',
          })
        } else {
          return res.status(apiRes.status).json({
            error: 'アカウント登録に失敗しました',
          })
        }
      } catch (err) {
        return res.status(500).json({
          error: 'アカウント登録に失敗しました',
        })
      }
    } else {
      res.setHeader('Allow', ['POST'])
      return res.status(405).json({ error: `Method ${req.method} not allowed` })
    }
  }