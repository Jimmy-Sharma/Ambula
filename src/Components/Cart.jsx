import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Navbar from '../pages/Navbar'
import '../Styling/Cart.css'

const Cart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  console.log(data)

  let store = JSON.parse(localStorage.getItem("buy")) || []

  const handleCartBTN = (id) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        store.push(data[i])
      }
    }
    localStorage.setItem("cart", JSON.stringify(store))
    alert("Item added to cart!!")
  }

  return (
    <div>
      <div>
        <div>
          <Navbar />
        </div>
        <div  id='motherContainer'>
          <Link to="/shopping/cart"  ><button id='GoToCartBtn'>Go To Cart</button></Link>
        </div>
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
                        <img id='ratingStar' src="star.png" alt="" />
                        <p className='price'>{el.rating.rate}</p>
                      </div>
                      <button id='cartBTN' onClick={() => handleCartBTN(el.id)}>Add to Cart</button>
                    </div>
                  ))
                }
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart