import classNames from "classnames/bind";
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from "~/components/Proper";
import Tippy from '@tippyjs/react/headless';
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";
import PropTypes from 'prop-types';
const cx =classNames.bind(styles);
const  Menu = ({children, items = []}) => {

    const [history, setHistory]= useState([{data: items}]);
    const current = history[history.length-1];
//logic
    const renderItems =() => {
        return current.data.map((item, index) => {
                const isParent = !!item.children;
           return  <MenuItem  key={index} data={item} onClick={() => {
            if(isParent){
               setHistory((pre => [...pre, item.children]));

            }
           }}/> 
    });
    };
    return ( 
            <Tippy 
            
            interactive
            delay={[0,700]}
                    placement="bottom-end"
                    render={(attrs) => (
                        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                            <PopperWrapper >
                                 {history.length>1 && <Header title="Language"
                                 onBack={() => setHistory(prev => prev.slice(0,1)) }
                                 />
                                }    
                            {renderItems()}
                            </PopperWrapper>
                        </div>
                    )}

                    onHide={() => setHistory(prev => prev.slice(0,1))}
            >
                        {children}
            </Tippy>
            
     );
}
Menu.prototype ={
    children:PropTypes.node.isRequired,
    items:PropTypes.array,
}

export default Menu;