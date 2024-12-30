import Link from 'next/link'
import Image from 'next/image';
import React from 'react';
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
          <div className='flex items-center '>
            <input
              className="border border-yellow-300 rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5"
              type="text"
              name="name"
              placeholder="会社名or銘柄コードで検索"
              onChange={onChange}
              value={name}
              required
            />
            <div className="ml-5">
              {/* <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded min-w-max" type="submit" >

              </button> */}
              <Link href="../stock/japan/overview">
                <p className='bg-green-500 px-3 py-2  w-20 rounded-md items-center cursor-pointer hover:opacity-80 text-white'>検索</p>
              </Link>
            </div>
          </div>
        </div>

      </form>
      {
        searchData && (
          <div>
            <div>

              <div>{searchData.content}</div>
              <div>{searchData.id}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl m-4">{searchData.name}</div>
            </div>
          </div>
        )
      }
    </div>
  )
}

