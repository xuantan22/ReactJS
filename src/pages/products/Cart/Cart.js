import classNames from "classnames/bind";
import styles from './Cart.module.scss';
import Button from "~/components/Button";
import { useSelector, useDispatch } from "react-redux";
import CartItems from "./CartItems";
import { Dispatch } from "react";
import { delCart } from "~/redux/action";

const cx=classNames.bind(styles);
const  Cart = () => {
    const state = useSelector((state) => state.handleCart);

    const dispatch = useDispatch();

    const handleDelCart =(item) =>{
        dispatch(delCart(item))
     }
     console.log(state)
    return (  

        <div className={cx('wrapper')}>
            <div className={cx('cart-title')}>
                <span className={cx('app-name')}>ShopCXT</span>
                <span className={cx('cart')}>Giỏ hàng</span> 
            </div>

            <div className={cx('statistical')}>
                <input type="checkbox"/>
                <span className={cx('product-titlte')}>Sản phẩm</span>
                <span className={cx('bill-titlte')}>Đơn giá</span>
                <span className={cx('quantity-title')} >Số lượng</span>
                <span className={cx('amount')}>Số tiền</span>
                <span className={cx('operation')}>Thao tác</span>
            </div>
        <div>
            {state.numberCart !== 0 && state.map(product => (
            {state.map(product => (

                <CartItems data={product}/>
            ))
            
            }
        </div>
        
        <div className={cx('select-total')}>
                <input type='checkbox'/>
                <button className={cx('select-all')}>Chọn Tất Cả ({state.length}) </button>
                <button onClick={handleDelCart} className={cx('delete-btn')}>Xóa</button>
                <span className={cx('price-total')}>Tổng Thanh Toán ({state.length} sản phẩm) :{}</span>
                <Button>Mua Hàng</Button>
            </div>
    </div>
    );
}

export default Cart ;