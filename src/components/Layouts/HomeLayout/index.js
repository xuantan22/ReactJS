import Header from "../components/Header/Header";
import classNames from "classnames/bind";
import styles from './HomeLayout.module.scss'
import Footer from "../components/Footer/Footer";
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
const  HomeLayout = ({children}) =>{
    return (
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}
HomeLayout.prototype ={
    children: PropTypes.node.isRequired,
}

export default HomeLayout ;