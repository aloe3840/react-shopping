import { useDispatch, useSelector } from 'react-redux'
import './product-tile.css'
import { addToCart, removeFromCart } from '../../store/slices/cart-slices'

//home컴포넌트에서 props로 상품정보를 받음
export default function ProductTile({product}){
  //addToCart함수를 이용해서 정보를 추가
  const dispatch = useDispatch()
  function hAddToCart(){
    dispatch(addToCart(product))
  }

  function hRemoveFromCart(){
    dispatch(removeFromCart(product.id))
  }

  //cart프로퍼티를 추출
  const cart = useSelector((state)=>{
    return(
      state.cart
    )
  })

  return(
    <>
      <div className='flex-col-container'>
        <div style={{height: '180px'}}>
          <img className='full-cover-image' src={product?.image} alt={product?.title}/>
          <div>
            <h4 className='product-title'>{product?.title}</h4>
          </div>
          <div className='add-cart-button-wraper'>
            <button className='add-cart-button' onClick={cart.some(item=>item.id === product.id)? hRemoveFromCart : hAddToCart}>
              {
                cart.some(item=>item.id === product.id)? '장바구니 제거':
                '장바구니 담기'
              }
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

//장바구니에 담긴 정보는 리덕스 store에 저장할거임
//props로 전달하려면 자기 컴포넌트에서 사용돼야해야함
//reducts로 넘겨줘야함