import Link from 'next/link'
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router'
import { useState } from 'react';




export default function Form_Stock() {
  const [searchData, setSearchData] = useState({})
  const [formData, setFormData] = useState({
    name: '',
  })
  const {
    name,
  } = formData
  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const onSubmit = async (e) => {
    e.preventDefault()
    const body = JSON.stringify({
      name,
    })
    const res = await fetch(`http://localhost:8000/stock/serch_stock/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body
    })
    const data = await res.json()
    console.log(data)
    setSearchData(data)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <div className="m-4 text-2xl text-center" htmlFor="name">
            気になる銘柄を調べる
          </div>
          <div className='flex'>
            <input
              className="border border-yellow-300 rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5"
              type="text"
              name="name"
              placeholder="会社名or銘柄コードで検索"
              onChange={onChange}
              value={name}
              required
            />
            <div className="flex justify-center ml-5">
              <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded" type="submit" >
                <Link  href="../stock/japan/${stock.id}`">
                  検索
                </Link>
              </button>
            </div>
          </div>
        </div>

      </form>
      {
        searchData && (
          <div>
            <div>{searchData.name}</div>
            <div>{searchData.content}</div>
          </div>
        )
      }
    </div>
  )
}

