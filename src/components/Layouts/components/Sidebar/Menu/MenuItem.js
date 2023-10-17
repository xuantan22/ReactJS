import classNames from "classnames/bind";
import styles from './Menu.module.scss';
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from 'prop-types';

const cx= classNames.bind(styles);

const  MenuItem = ({title, icon, to}) => {


    const handleOnMouseDown =(e) =>{
        console.log(e.target.src)
    }
    return ( 
        <NavLink onMouseDown={handleOnMouseDown} to={to} className={(nav) =>cx('menu-item', {active: nav.isActive})}
            onClick={useEffect(() =>{
                // eslint-disable-next-line no-unused-expressions
                fetch(`http://localhost:9000/products?name_like${title}`)
                .then(res => res.json())
            },[])
         }
        >
            <span className={cx('icon')}>{icon}</span>
        <span className={cx('title')}>{title}</span>
        {
           
        }
        
        </NavLink>
     );
}

MenuItem.prototype={
    title:PropTypes.string,
    icon:PropTypes.node,
    to:PropTypes.string,
}

export default MenuItem;