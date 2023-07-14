import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../pages/Navbar'

const ShoppingCart = () => {

  let data = JSON.parse(localStorage.getItem('cart'))

  let count=data.length

  let amount=0;
  for(let i=0;i<data.length;i++){
    amount+=data[i].price
  }

  const handleCartBTN = (id) => {
    let arr = []
    for (let i = 0; i < data.length; i++) {
      if (data[i].id !== id) {
        arr.push(data[i])
      }
    }
    data = arr

    localStorage.setItem("cart", JSON.stringify(data))
    window.location.reload()
  }
  return (
    <div>
      <div>
        <div><Navbar/></div>
        <div>
    
        </div>
        <div id='motherContainer'>
          <Link to="/cart" ><button id='GoToCartBtn'>Back To Shopping</button></Link>
        </div>
        <div>
          <h1>Total No. Of Items: {count}</h1>
          <h1>Total Cart Value: ₹ {amount}</h1>
        </div>
        <div></div>
        <div>
          <div>
            {data ? (
              <div id='dataMap'>
                {
                  data.map((el) => (
                    <div id='productDiv'>
                      <img id='productIMG' src={el.image} alt="" />
                      <p id='title'>{el.title}</p>
                      <p className='price'>₹ {el.price}</p>
                      <div id='rateDiv'>
                        <img id='ratingStar' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5bSZPRt-CKAXa7VLdDZP72tAHHiyIv1Aszg&usqp=CAU" alt="" />
                        <p className='price'>{el.rating.rate}</p>
                      </div>
                      <button id='cartBTN' onClick={() => handleCartBTN(el.id)}>Remove</button>
                    </div>
                  ))
                }
              </div>
            ) : (
              <h1>Cart is Empty...</h1>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ShoppingCart