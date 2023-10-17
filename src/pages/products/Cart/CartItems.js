/* eslint-disable jsx-a11y/alt-text */
import classNames from "classnames/bind";
import styles from './Cart.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delItem,getAllProduct } from "~/redux/action";
import store from "~/redux/store";
import Button from "~/components/Button";

const cx=classNames.bind(styles);
    const CartItems =({data}) => {
        console.log(data)


        const state = useSelector((state) => state.handleCart);

        const dispatch = useDispatch();
        const handleDelItem =(id) =>{
            dispatch(delItem(id))
        }
        
     

       
        return(

                <div>
                    {  data.map(item => (
                        <div key={item.id} className={cx('allproduct')}>
                            <div className={cx('select-shop')}>
                                <input type="checkbox" />
                                <span className={cx('shop-name')}>Vittel Store-AAR</span>
                            </div>
                
                            <div className={cx('product')}>
                                <input className={cx('checkbox')} type='checkbox'/>
                                <img width='100px'  src={item.src} alt=""/>
                                <div className={cx('product-info')}>
                                    <span>{item.title}</span>
                                    <span><img className={cx('shop-icon')} width='14px' src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/91167e001db60b62d4f85c3e0ea919b6.png'/> 7 ngày miễn phí trả hàng</span>
                                </div>
                                <div className={cx('classify')}>
                                <div className={cx('classify-title')}>
                                    <button className={cx('classify-btn')}>Phân Loại Hàng:</button>
                                    <div className={cx('arrow')}></div>
                                </div>
                                    <div className={cx('product-name')}> Gold 256GB</div>
                
                                </div>
                
                                <div className={cx('price')}>
                                    <span className={cx('cost')}>{item.originalPrice}</span>
                                    <span className={cx('current-price')}>{item.currentPrice}</span>
                                </div>
                                <div className={cx('quantity')}>
                                    <FontAwesomeIcon className={cx('minus-icon')} icon={faMinus}/>
                                    <span className={cx('number')}>1</span>
                                    <FontAwesomeIcon className={cx('plus-icon')} icon={faPlus}/>
                                </div>
                                <div className={cx('price-total-type')}>
                                    <span>{item.currentPrice}</span>
                                </div>
                            <div className={cx('operation')}>
                                <div >
                                    <Button onClick={() =>handleDelItem(item.id)} className={cx('delete-btn')}>Xóa</Button>
                                </div>
                                <div className={cx('similar-products')}>
                                    <button>Tìm sản phẩm tương tự</button>
                                    <button className={cx('arrow')}></button>
                                </div>
                            </div>
                            </div>
                        </div>   
                    )
                    )
    }
                </div>
        )
    }
export default CartItems;