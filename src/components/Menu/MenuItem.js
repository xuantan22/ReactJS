import Button from "~/components/Button";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import PropTyes from 'prop-types';
const cx=classNames.bind(styles);
const  MenuItem = ({ data, onClick }) => {
    return ( 
        <Button small className={cx('menu-item')} leftIcon={data.icon} onClick={onClick} to={data.to}> {data.title} </Button>
     );
}
MenuItem.prototype = {
    data :PropTyes.node.isRequired,
    onClick :PropTyes.bool
}
export default MenuItem;