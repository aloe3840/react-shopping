import { useSelector } from 'react-redux'
import './cart.css'
import { useEffect, useState } from 'react'
import CartTile from '../components/cart-tile/cart-tile'
import { Link } from 'react-router-dom'

export default function Cart(){
  const cartState = useSelector(state=>state.cart)
  const [totalPrice, setTotalPrice] = useState(0)

  // 총 가격 계산하기
  useEffect(() => {
    const total = cartState.reduce((acc, cur) => {
      return acc + cur.price;
    }, 0);
    setTotalPrice(total * 1300);
  }, [cartState]);

  return(
    <>
      {cartState && cartState.length ? (
        <div className='my-element'>
          <div>
            <h1>장바구니 내역</h1>
            <p>담긴 갯수: <span>{cartState.length}</span></p>
            <p>총 가격: <span>{Math.floor(totalPrice).toLocaleString('ko-KR')}원</span></p>
          </div>
          <div className='centerd-flex-cloum'>
            {cartState.map((item, idx) => (
              <CartTile key={idx} cartItem={item}/>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h1>현재 담긴 상품이 없습니다.</h1>
          <Link to='/'>
            <button>담으러 가기</button>
          </Link>
        </div>
      )}
    </>
  )
}
