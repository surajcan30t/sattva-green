import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { data } from '@/utils/data'
import AddToCart from '@/components/AddToCart'


const page = async ({ params: { id } }) => {
    const product = data.products.find((x) => x.id === id)
    console.log(product)
  if (!product) {
    return <div>Product Not Found</div>
  }
  return (
    <div>
      <div className="py-2">
        <Link href="/">back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <img
            src={product.image}
            alt={product.title}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.title}</h1>
            </li>


            <li>
              <hr className="my-3" />
              Description:
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>&#8377;{product.price}</div>
            </div>

            <AddToCart product={product} redirect={true} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page