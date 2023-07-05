import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';




const Header = () => {

  const [selectedPage, setPage] = useState()
  const navigator = useNavigate()

  const [sideBar, toggleSideBar] = useState(false)

  useEffect(() => {
    if (selectedPage) {
      navigator(selectedPage)
    }
  }, [selectedPage])

  useEffect(() => {
    toggleSideBar(false)
  }, [selectedPage])





  return (
    <header>


      <div className="right">
        <div className="logo">
          <img src={require("../../images/header/logo.avif")} alt="" />
        </div>
        <div className="menu">
          <Icon icon="ep:menu" onClick={() => toggleSideBar(!sideBar)} />
        </div>
      </div>
      <div className="mid">
        <div className="search">
          <Icon className='icon' icon="teenyicons:search-outline" />
          <input type="text" placeholder='محصول, دسته و یا برند مورد نظرتان ا جستجو کنید' />
        </div>
      </div>
      <div className="left">
        <button className="user">
          <Icon icon="ph:user" />
          <span>حساب کاربری</span>
        </button>
        <button className="shopping-cart">
          <Icon icon="ph:bag-thin" />
          <span>سبد خرید</span>
        </button>
      </div>

      <nav >
        <ul className={sideBar ? `side-bar-visible` : ""}>
          <li className={selectedPage === "/" ? `selected` : ""} onClick={() => { setPage("/") }}>
            <Icon className='icon' icon="ion:home-outline" />
            <span>صفحه ی اصلی</span>
          </li>
          <li className={selectedPage === "/products-page" ? `selected` : ""} onClick={() => { setPage("/products-page") }}>
            <Icon className='icon' icon="fluent-mdl2:product-variant" />
            <span>محصولات</span>
          </li>
          <li className={selectedPage === "/about-us-page" ? `selected` : ""} onClick={() => { setPage("/about-us-page") }}>
            <Icon className='icon' icon="mdi:about-variant" />
            <span>درباره ی ما</span>
          </li>
          <li className={selectedPage === "/shopping-cart-page" ? `selected` : ""} onClick={() => { setPage("/shopping-cart-page") }}>
            <Icon className='icon' icon="ph:bag-thin" />
            <span>سبد خرید</span>
          </li>
          <li className={selectedPage === "/user-page" ? `selected` : ""} onClick={() => { setPage("/user-page") }}>
            <Icon className='icon' icon="ph:user" />
            <span>حساب کاربری</span>
          </li>
          <li className={selectedPage === "/create-post-page" ? `selected` : ""} onClick={() => { setPage("/create-post-page") }}>
            <Icon icon="uil:create-dashboard" />
            <span>ایجاد محصول</span>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header