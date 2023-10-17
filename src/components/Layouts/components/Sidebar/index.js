import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import Menu, {MenuItem} from './Menu';
import { arrowRight } from '../Icons/Icons';


const cx = classNames.bind(styles);


const  Sidebar = () => {
    
    
   

    return (
        <aside className={cx('wrapper')}>
            <div className={cx('all-category')}>
            
            <span className={cx('icon-list')}><FontAwesomeIcon  icon={faList} /></span>
            <h4>Tất cả Danh Mục</h4>
            </div>
            <h4>Smart Phone</h4>
            <Menu >
                <MenuItem  title='iPhone' to='/smartphone/iphone' icon={arrowRight} />
                <MenuItem  title='Xiaomi' to='/smartphone/xiaomi' icon={arrowRight}/>
                <MenuItem  title='Phụ Kiện' to='/smartphone/phu-kien' icon={arrowRight}/>
            </Menu>

            <h4>Clock</h4>
            <Menu>
                <MenuItem title='Casio' to='/clock/casio' icon={arrowRight} />
                <MenuItem title='Orient' to='/clock/orient' icon={arrowRight}/>
                <MenuItem title='Citizen' to='/clock/citizen' icon={arrowRight}/>
                <MenuItem title='Seiko' to='/clock/seiko' icon={arrowRight}/>
                <MenuItem title='Fossil' to='/clock/fossil' icon={arrowRight}/>
            </Menu>

            <h4>Laptop</h4>
            <Menu>
                <MenuItem id='9' title='Asus' to='/laptop/asus' icon={arrowRight}  />
                <MenuItem title='Acer' to='/laptop/acer' icon={arrowRight}/>
                <MenuItem title='Dell' to='/laptop/dell' icon={arrowRight}/>
                <MenuItem title='MSI' to='/laptop/msi' icon={arrowRight}/>
                <MenuItem title='Samsung' to='/laptop/samsung' icon={arrowRight}/>
            </Menu>
        
        </aside>
    );
}

export default Sidebar;
