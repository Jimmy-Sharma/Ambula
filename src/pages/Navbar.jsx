import React from 'react'
import { Link } from 'react-router-dom'
import '../Styling/Navbar.css'

const Navbar = () => {
    return (
        <div id='navbarContainer'>
            <div id='navbarSubContainer'>
                <div>
                    <img src="https://ambula.app/assets/images/logo.png" alt="" />
                </div>
                <div id='routes'>
                    <Link to="/" ><button>Home </button></Link>
                    <Link to="/about" ><button>About </button></Link>
                    <Link to="/contact" ><button>Contact</button></Link>
                    <Link to="/todo" ><button>Todo</button></Link>
                    <Link to="/cart" ><button>Shopping</button></Link>
                    <Link to="/movies" ><button>Movies</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar