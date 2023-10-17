/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from './Home.module.scss';
import Button from "~/pages/Home/Button";
import * as displayItems from '~/apiServices/displayItems';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { SliderData } from "./SliderData";
import ImageSlider from "./ImageSlider";
const cx= classNames.bind(styles);

const  Home = () => {
    const [products, setProducts]=useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await displayItems.display('/products','Iphone');
            setProducts(result);
        }
        fetchApi();
    },[])

    const CATALOG =[
        {
            "id":1,
            "title":"Iphone",
            "src":'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/213031/s16/iphone-12-purple-thumbtz-650x650.png',
            "to":'/smartphone/iphone',
        },
        {
            "id":2,
            "title":"Máy tính",
            "src":'https://bizweb.dktcdn.net/thumb/grande/100/305/872/products/surface-laptop-ab309a89-10f9-4b5d-bf2b-9752ce1eb29c.jpg?v=1535015372307',
            "to":'laptop/asus'
        },
        {
            "id":3,
            "title":"Đồng Hồ",
            "src":'https://www.casio.watch-vietnam.vn/wp-content/uploads/2019/06/MTP-1374L-1AV.png',
            "to":'clock/casio'
        },
        {
            "id":4,
            "title":"Tai nghe",
            "src":'https://cdn.tgdd.vn/Products/Images/54/187374/tai-nghe-bluetooth-kanen-k6-den-2-org.jpg',
            "to":'/smartphone/phu-kien'
        },
        {
            "id":5,
            "title":"Xiaomi",
            "src":'https://cdn.tgdd.vn/Products/Images/42/306774/xiaomi-redmi-12-pro-4g-thumb-600x600.jpg',
            "to":'/smartphone/xiaomi'
        },
    ]
    

    return (
        < div className={cx('wrapper')}>
            <ImageSlider slides={SliderData} />
        <div>
            <h4>Danh Mục</h4>
            {
                CATALOG.map(item => (
                    <Button to={item.to} className={cx('catalog')} key={item.id}>
                        <img className={cx('catalog-img')} src={item.src}/>
                        <h3 className={cx('catalog-title')}>{item.title}</h3>
                    </Button>
                ))
            }
        </div>
        <div>Flash Sale</div>
        {
        products.map(item => (
            <Button small className={cx('info-item')}  key={item.id} to={`/products/${item.type}/${item.id}`} >
            <img className={cx('product-image')} src={item.src}/>
            <h3 className={cx('item-title')}>{item.title}</h3>
            <span className={cx('item-price')}>{item.currentPrice} vnd</span>
            <span className={cx('cart-icon')}><FontAwesomeIcon icon={faCartShopping}/></span>
            
       </Button> 
        ))
        }
       </div>
    );
}

export default Home;