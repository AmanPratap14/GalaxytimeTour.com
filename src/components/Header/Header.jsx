import React from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import './Header.css'


const nav_links = [
    {
        path:'/home',
        dispaly:'Home'
    },
    {
        path:'/about',
        dispaly:'about'
    },
    {
        path:'/tours',
        dispaly:'Tours'
    },
]

const Header = () => {
  return (
    <header className="header">
        <Container>
            <Row>
                <div className='nav_wrapper d-flex align-items-center justify-content-boetween'>

{/*================================ logo =================================================*/}
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
{/*================================ logo end=================================================*/}


{/*================================ menu-start =================================================*/}
                    <div className="navigation">
                        <ul className="menu d-flex align-items-center gap-5">
                            {
                                nav_links.map((item, index) => (
                                    <li className="nav_item" key={index}>
                                        <NavLink
                                            to={item.path} 
                                                className={ navClass => 
                                                    navClass.isActive ? 'active__link' : ""
                                                }> 
                                        {item.dispaly} </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
{/* ================================================= menu-end  =================================================*/}


                    <div className="nav__right d-flex align-item-center gap-4">
                        <div className="nav__btns d-flex align-item-center gap-4">
                            {/* <button className='btn secondary__btn'><Link to='./'>Login</Link></button>
                            <button className='btn primary__btn'><Link to='./'>Register</Link></button> */}
                        </div>
                        <span className="mobile_menu">
                        <i class="ri-menu-line"></i>
                        </span>
                    </div>

                </div>
            </Row>
        </Container>

    </header>
  )
}

export default Header