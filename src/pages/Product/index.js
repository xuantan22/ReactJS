/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import classNames from "classnames/bind";
import styles from './Products.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faCircleQuestion} from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import Button from './Button';
import Modal from 'react-modal';
import * as displayItems from '~/apiServices/displayItems';
import { useDispatch } from "react-redux";
import { addCart } from "~/redux/action";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {faChevronRight, faCartShopping,faMinus,
        faLocationCrosshairs,faClose,faPlus,
        faChevronDown}
        from '@fortawesome/free-solid-svg-icons';

const cx= classNames.bind(styles);
const Product =() => {
 
    const {id,type} = useParams();
    const [image,setImage] =useState('https://happymobile.com.vn/uploads/images/-173495197.png');
    const [product, setProduct] =useState([]);
    const [modalOpen, setModalOpen] =useState();
    const [address, setAddress] = useState('Huyện Ba Vì');
    const [counter, setCounter]= useState(1);

    const dispatch = useDispatch();

    const addProduct =(product) => {
        dispatch(addCart(product));
    }
    
    useEffect(() => {
        const fetchApi = async () => {
            const result = await displayItems.display('/products',type,id);
            setProduct(result);
        }
        fetchApi();
    },[])
    
    
       
    

    const openModal =() =>{
        setModalOpen(true);
    }

    const closeModal=() => {
        setModalOpen(false);
    }
    const afterOpenModal=() => (
        <div className={cx('after-openmodal')}></div>
    )
    const handleMouseOverImage =(e) =>{
        setImage(e.target.src)
    }

    const handleDecrease=() =>{
        if(counter>1){

            setCounter(counter-1);
        }
    }
    const handleIncrease=() =>{
        setCounter(counter+1);
    }

    const notify = () => toast.success('Sản phẩm đã được thêm vào giỏ hàng!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
    const handleAddCart =(product) => {
        addProduct(product);
        notify();
    }


    

    
    return (
       
        <div className={cx('wrapper')}>

            {
                product.map(item => (
                    
            <div key={item.id}>
            <div className={cx('link')}>

             <Link to='/'>Shop</Link>
                    <FontAwesomeIcon className={cx('icon-chevronright')} icon={faChevronRight} />
                    <Link to='/smartphone/iphone'>{item.classify} & Phụ Kiện</Link>
                    <FontAwesomeIcon className={cx('icon-chevronright')} icon={faChevronRight} />
                    <Link to='/smartphone/iphone'>{item.classify}</Link>
                    <FontAwesomeIcon className={cx('icon-chevronright')} icon={faChevronRight} />
                    <Link to='/iphone'>{item.type}</Link>
                    <FontAwesomeIcon className={cx('icon-chevronright')} icon={faChevronRight} />
                    <span className={cx('product-title')}>{item.title}</span>
            </div>
            <div className={cx('detail')}>
                <div className={cx('image')}>
                    
                    <img className={cx('main-image')} src={(image)} />
                   <div className={cx('container-subimage')}>
                    {
                        item.subSrc.map(items => (

                            <div key={items.id} className={cx('subimage')}><img className={cx('images')} onMouseOver={handleMouseOverImage} src={items.src}/></div>
                        ))
                    }
                   </div>
            
            </div>
            
            <div className={cx('description-product')}>
                <h4 className={cx('title')}>{item.title}</h4>
                <div className={cx('statistical')}>
                    <Button small className={cx('icons-start')}>
                        <u>4.0</u>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </Button>

                    <Button className={cx('evaluate')}><u>{item.feedback}</u> Đánh Giá</Button>
                    <div className={cx('sold')}><u>{item.sold}</u> Đã Bán</div>

                </div>
                    <section>
                        <span className={cx('original-price')}>{item.originalPrice}</span>
                        <span className={cx('discount-price')}>{item.currentPrice}</span>
                        <span className={cx('discount')}>{item.discount}</span>
                    </section>
                    <section className={cx('installment')}>
                        <span className={cx('installment-title')}>0% trả góp</span>
                        <span className={cx('installment-time')}>{item.installmenContent}</span>
                    </section>

        <section className={cx('section_transfer')}>
                    <span className={cx('transfer-title')}>vận chuyển</span>
                     <div className={cx('transfer-info')}><div>
                        <FontAwesomeIcon className={cx('cart-icon')} icon={faCartShopping} />
                        Xử lý đơn hàng bởi shopCXT
                        <FontAwesomeIcon className={cx('help-icon')} icon={faCircleQuestion} />
                    </div>
                        <div>Miễn phí vận chuyển</div>
                        <div>
                            <span className={cx('transfer-address')}>vận chuyển tới </span>
                            <span>{address} </span>
                            {/* {showForm && <ShowForm  showForm={showForm} setShowForm={setShowForm} setAddress={setAddress} address={address}/> } */}

                            <button onClick={openModal}><FontAwesomeIcon className={cx('checvrondown-icon')} icon={faChevronDown} /></button>
                            <Modal
                                 className={cx('modal')}
                                isOpen={modalOpen}
                                onAfterOpen={afterOpenModal}
                                onRequestClose={closeModal}
                                contentLabel="Example Modal"
                                shouldCloseOnOverlayClick={false}
                             >
                                <div className={cx('address-form')}>
                                     <span className={cx('address-title')}>Địa chỉ nhận hàng</span>
                                    <Button onClick={closeModal} className={cx('close-btn')}>
                                         <FontAwesomeIcon className={cx('close-icon')} icon={faClose} />
                                    </Button>

                                <div>
                                    <input className={cx('search-input')} placeholder='Tìm Thành Phố, Quận Huyện'></input>
                                    <Button className={cx('search-btn')}>Sử dụng</Button>
                                </div>

                                <div className={cx('current-position')}>
                                    <Button>
                                        <FontAwesomeIcon icon={faLocationCrosshairs} />
                                        <span> Sử dụng đia chỉ hiện tại</span>
                                    </Button>
                                </div>
                                    <h5>Địa chỉ của tôi</h5>
                                    <button><FontAwesomeIcon icon={faPlus} />Thêm địa chỉ</button>
                                </div>
                            </Modal>

                        </div>
                        <div>

                            <span className={cx('ship-title')}>phí vận chuyển</span>
                            <span className={cx('ship-cost')}>0d</span>
                            <button><FontAwesomeIcon className={cx('checvrondown-icon')} icon={faChevronDown} /></button>

                        </div>
                    </div>
                                       
                </section>

                    <section>
                    <span>Phân Loại</span>

                    <div className={cx('product-colors')}>
                            <Button  className={cx('product-color')}>Red</Button>
                            <Button  className={cx('product-color')}>Yellow</Button>
                            <Button  className={cx('product-color')}>Blue</Button>
                            <Button  className={cx('product-color')} >Black</Button>
                            <Button  className={cx('product-color')}> Midnight</Button>
                    </div>
                    </section>

                     <section>
                          <div className={cx('counter')}>
                          <span>Số lượng</span>
                          <span className={cx('minus-icon')}><FontAwesomeIcon  onClick={handleDecrease} icon={faMinus}/></span>
                          <span className={cx('number')}>{counter}</span>
                          <span  className={cx('plus-icon')}><FontAwesomeIcon  onClick={handleIncrease} icon={faPlus}/></span>
                          </div>
                     </section>

                     <section className={cx('cart')}>
                        <Button onClick={() => handleAddCart(product)} outlineColor><FontAwesomeIcon icon={faCartShopping}/>Thêm Vào Giỏ Hàng</Button>
                        <Button to='/cart' primary>Mua Ngay</Button>
                        <ToastContainer position="bottom-right"
                                        autoClose={5000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                        theme="light">
                        </ToastContainer>
                      
                    </section>


            </div>

           
            </div>
            </div>
                ))
            }


        </div>
    )
}

export default Product;