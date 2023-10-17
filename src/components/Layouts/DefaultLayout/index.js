import Header from "../components/Header/Header";
import classNames from "classnames/bind";
import Sidebar from "../components/Sidebar";
import styles from './DefaultLayout.module.scss'
import Footer from "../components/Footer/Footer";
import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const cx = classNames.bind(styles);

const  Defaultlayout = ({children}) => {

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({top:0,behavior:'auto'});

    },[pathname])

    return (
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
           
                <Sidebar/>
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

Defaultlayout.prototype= {
    children: PropTypes.node.isRequired,
}
export default Defaultlayout ;