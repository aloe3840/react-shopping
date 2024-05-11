import { BrowserRouter, Route, useSearchParams } from 'react-router-dom'
import './home.css'
import {} from 'react-icons'
import { Circles } from 'react-loader-spinner'
import { useEffect, useState } from 'react'
import ProductTile from '../components/product-tile/product-tile'

export default function Home(){
  //fetch로 받아온 데이터를 저장할 스테이트
  const [products, setProducts] = useState([])
  //데이터를 가져오는 동안 표시될 스테이트
  const [loading , setLoading] = useState(false)

  // https://fakestoreapi.com/products  가상쇼핑몰
  //서버에서 데이터를 받기 위해 useEffect, fetch사용 

  //리액트에서 화면과는 별개로 오래걸리는 작업은 useEffect사용
  async function fetchListProducts(){
    setLoading(true)
    const res = await fetch('https://fakestoreapi.com/products') //await => fetch가 끝날 때까지 기다려라. fetch의 링크를 res에 할당하고 fetch는 저 주소를 불러와줌
    const data = await res.json() //제이슨 형태로 바꿔서 data변수에 저장

    console.log(data) //잘 받아왔는지 콘솔로 확인

    if(data){
      setLoading(false)
      setProducts(data)
    }
  }


  useEffect(()=>{
    fetchListProducts()
  },[])  //,[]를 하면 update에 대해서는 발동 안 하게. (처음만 발동)

  return(
    <>
      {
        loading ?
        <div className='my-loading'><Circles height={'60'} width={'60'} color='grey'/></div> :
        <div className='my-product-grid'>
          {
            products.map((product, idx)=>{
              return(
                <ProductTile key={idx} product={product} /> // product props를 전달
              )
            }) 
          }
        </div>
      }
    </>
  )
}
