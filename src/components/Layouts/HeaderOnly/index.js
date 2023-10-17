import Header from "../components/Header/Header";
import classNames from "classnames/bind";
import styles from './HeaderOnly.module.scss';
import PropTyes from 'prop-types';

const cx = classNames.bind(styles);
const  HeaderOnly = ({children}) => { 
    return ( 
        <div>
            <Header/>
            <div className={cx('container')}>
                <div className={cx("content")}>{children}</div>
            </div>
        </div>
     );
}
HeaderOnly.prototype = {
    children: PropTyes.node.isRequired,
}
export default HeaderOnly;