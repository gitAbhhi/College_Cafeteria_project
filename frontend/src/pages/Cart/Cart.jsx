import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../components/context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);

  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        {/* <div className="cart-items-title">
          <p>Itmes</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div> */}
        {/* <br />
        <hr /> */}
        {/* {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return <div>
              <div className="cart-items-title cart-items-item">
              <img src={url+'/images/'+item.image} alt="" />
              <p>{item.name}</p>
              <p>₹{item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>₹{item.price*cartItems[item._id]}</p>
              <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
            </div>
            <hr />
            </div>

            

          }
        })} */}

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return <div>
              <div className=" cart-items-item">
                <div className='remove-item'>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <div className='cart-items-item-img'>
                  <img src={url + '/images/' + item.image} alt="" />
                </div>
                <div>
                  <p className='foodname'>{item.name}</p>
                  <p>Price - ₹{item.price}</p>
                  <p>Quantity - {cartItems[item._id]}</p>
                  <p>Total - ₹{item.price * cartItems[item._id]}</p>
                </div>
              </div>
              {/* <hr /> */}
            </div>



          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            {/* <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr /> */}
            <div className="cart-total-detail">
              <b>Total</b>
              <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}

export default Cart