/* eslint-disable jsx-a11y/alt-text */
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import Button from "~/pages/Home/Button";
import styles from './Citizen.module.scss';
import Pagination from "~/components/Pagination/Pagination";
import * as displayItems from '~/apiServices/displayItems';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";  
import { useParams } from "react-router-dom";

const cx= classNames.bind(styles);
const Citizen = () => {

    const {id} = useParams(); 
    const [products, setProducts] = useState([]);
    const [currentPage,setCurentPage]= useState(1);
    // eslint-disable-next-line no-unused-vars
    const [itemPerPage, setItemPerPage]= useState(10);


    useEffect(() => {
        const fetchApi = async () => {
            const result = await displayItems.display('products','Citizen',id);
            setProducts(result);
        }
        fetchApi();
    },[])

    const lastItemIndex= currentPage*itemPerPage;
    const firstItemIndex= lastItemIndex-itemPerPage;
    const currentItems= products.slice(firstItemIndex, lastItemIndex);
return (
    <div className={cx('wrapper')}>
       {
        currentItems.map(item => (
            <Button small className={cx('info-item')}  key={item.id} to={`/products/${item.type}/${item.id}`} >
            <img className={cx('product-image')} src={item.src}/>
            <h3 className={cx('item-title')}>{item.title}</h3>
            <span className={cx('item-price')}>{item.currentPrice} vnd</span>
            <span className={cx('cart-icon')}><FontAwesomeIcon icon={faCartShopping}/></span>
            
       </Button> 
        ))
        }
    <Pagination 
    totalItems={products.length}
    ItemsPerPage={itemPerPage}
    setCurrentPage={setCurentPage}/>
   </div>
);
    };
export default Citizen;
