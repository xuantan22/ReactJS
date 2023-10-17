import classNames from "classnames/bind";
import styles from './SearchResults.module.scss';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const cx= classNames.bind(styles);
const  SearchResults = ({data}) => {
    return ( 
        <Link to={`/:${data.id}`} className={cx('wrapper')}>
            <div className={cx('info')}>
                    <span className={cx('title')}>{data.title}</span>
            </div>
        </Link>
     );
}

SearchResults.prototype ={
    data:PropTypes.node.isRequired
}
export default SearchResults;