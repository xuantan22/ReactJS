import classNames from "classnames/bind";
import styles from './Wrapper.module.scss';
import PropTypes from 'prop-types';

const cx= classNames.bind(styles);
const  Wrapper = ({children}) => {
    
    return ( 
        <div className={cx('wrapper')}>
        
          {children}
          </div>

     );
}

Wrapper.prototype = {
  children: PropTypes.node.isRequired,
}
export default Wrapper;