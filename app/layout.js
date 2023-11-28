'use client'
import { Josefin_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'
import App from '@/components/App'
import { StoreProvider } from '@/redux/StateProvider'

const inter = Josefin_Sans({ subsets: ['latin'], weights: [100, 200, 400, 700] })



export default function RootLayout({ children }) {

  // const [cart, setCart] = useState({});
  // const [total, setTotal] = useState(0);

  // const saveCart = (mycart) => {
  //   localStorage.setItem('cart', mycart)
  //   let total = 0;
  //   let key = Object.keys(cart)
  //   for(let i =0; key.length;i++){
  //     total += mycart[key[i]].price * mycart[key[i]].qty
  //   }
  //   setTotal(total)
  // }

  // useEffect(() => {
  //   try {
  //     let mycart = localStorage.getItem('cart');
  //   if (mycart) {
  //     setCart(mycart);
  //   }
  //   } catch (error) {
  //     console.log(error)
  //     localStorage.clear()
  //   }

  // }, [])

  // const addtoCart = (id, qty, price, name) => {
  //   let mycart = cart;
  //   if (mycart[id]) {
  //     mycart[id].qty += qty;
  //   } else {
  //     mycart[id] = { qty, price, name };
  //   }
  //   setCart(mycart);
  //   saveCart(mycart)
  // }

  // const removeCart = (id, qty, price, name) => {
  //   let mycart = cart;
  //   if (mycart[id]) {
  //     mycart[id].qty -= qty;
  //   } else {
  //     mycart[id] = { qty, price, name };
  //   }
  //   setCart(mycart);
  //   saveCart(mycart)
  // }


  return (
    <html lang="en">
      <body  className={`${inter.className} overflow-x-hidden`}>
        <StoreProvider>

          <Navbar />
          <App> {children} </App>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  )
}
