import classNames from "classnames/bind";
import styles from './Header.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faEarthAsia, faSignOut, faGear, faMessage, faFont, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {faBell,faCircleQuestion, faKeyboard, faUser  } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Button from "~/components/Button";
import images from "~/assets/images";
import Menu from "~/components/Menu/Menu";
import Search from "../Search/Search";
import {useSelector } from "react-redux";

const cx = classNames.bind(styles);

const MENU_INDIVIDUAL =[
        {
            icon: <FontAwesomeIcon icon={faUser}/>,
            title: "Tài Khoản Của Tôi",
         
        },
        {
            icon: <FontAwesomeIcon icon={faMessage}/>,
            title: "Hộp thoại",
        },
        {
            icon: <FontAwesomeIcon icon={faGear}/>,
            title: "Cài Đặt",
        },
        {
            icon: <FontAwesomeIcon icon={faSignOut}/>,
            title: "Đăng Xuất",
            to:"/Login"
           

        }

]



const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title:'Language 4',
            data:[
                {
                    // type:'language',
                    code:'en',
                    title:'Enghlish'
                },
                {
                    // type:'language',
                    code:'vi',
                    title:'Tiếng Việt'
                }
                
            ]
         }
        },
        {
        icon: <FontAwesomeIcon icon={faFont} />,
        title: 'Font',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcut',
    },
    
];



const  Header = () => {

    const current = true;
    const state = useSelector((state) => state.handleCart);
    console.log('state lenght:' + state.length);
   
    return current? ( <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('navbar')}>

            <div className={cx('logo')}>
                {/* <img src ={images.logo} alt="logo"></img> */}
                <span className={cx('download')}>Tải ứng dụng
                {/*Header QR code*/}
                            <div className={cx('header__qr')}>
                                <img src={images.code_qr} alt="QR code" className={cx('header__qr-img')} />
                                <div className="header__qr-apps">
                                     <a href="link" className={cx('header__qr-link')}>
                                        <img src={images.google} alt="" className={cx("header__qr-download-img")}/>
                                    </a> 
                                    <a href="link" className={cx('header__qr-link')}>
                                        <img src={images.app} alt="" className={cx('header__qr-download-img')}/>
                                    </a>
                                </div>
                                
                            </div>
                </span>
                <span className={cx('connection')} >Kết nối</span>
                <Button to='/facebook' small cadetblue><FontAwesomeIcon className={cx('icon-facebook')} icon={faFacebook}/></Button>
                <Button to='/instagram' small cadetblue><FontAwesomeIcon className={cx('icon-instagram')} icon={faInstagram}/></Button>
            </div>

            <div className={cx('action')}>
                <Button to='/' className={cx('home-btn')}>{<FontAwesomeIcon icon= {faHouse}/>}Trang Chủ</Button>

                <Button> {<FontAwesomeIcon icon= {faBell}/>}Thông Báo</Button> 

                <Menu items={MENU_ITEMS}>
                <button className={cx('language-btn')} > {<FontAwesomeIcon icon= {faEarthAsia}/>}<b>Tiếng Việt</b></button>
                </Menu>
                

                <Button className={cx('help-btn')}>{<FontAwesomeIcon icon={faCircleQuestion}/>}Trợ Gíup</Button>
                
                <Menu className={cx('menu-individual')} items={MENU_INDIVIDUAL}>
                <img className={cx('avatar')} src ="https://down-vn.img.susercontent.com/file/vn-11134226-7r98o-lla13kg5sypic2_tn" alt="avatar"/>
                </Menu>

            </div>
           
            </div>
            <div className={cx('input')}>
            <Search />
            <div className={cx('cart')}>
            <Button small to='/cart' >
                <FontAwesomeIcon className={cx('cart-icon')}  icon={faCartShopping}/>
                <p>{state.length}</p>
            </Button>
            </div>
            </div>
      
            
        </div>
        </header>
    ) : null;
}

export default Header;