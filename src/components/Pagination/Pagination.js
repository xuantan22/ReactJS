
import classNames from "classnames/bind";
import styles from './Pagination.module.scss';
import PropTypes from 'prop-types';
// import Pagination from "../../pages/Pagination/Pagination";

const cx=classNames.bind(styles);
const  Pagination = ({totalItems, ItemsPerPage , setCurrentPage }) => {
    let pages=[];

    for (let i = 1; i <= Math.ceil(totalItems/ItemsPerPage); i++) {
        pages.push(i);

    }
    
    return ( 
        <div className="pagination">
          
           {
           
            pages.map((page, index) => {
                return <button className={cx('pagination-btn')} key={index} onClick={() => {
                    setCurrentPage(page);
                }}>{page}</button>

            })}
        </div>
     );
}

Pagination.prototype = {
    totalItems: PropTypes.number,
    ItemsPerPage:PropTypes.number,
    setCurrentPage:PropTypes.func,
}
export default Pagination;