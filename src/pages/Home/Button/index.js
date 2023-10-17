import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    title,
    primary = false,
    outline = false,
    small = false,
    large = false,
    disabled = false,
    rounded = false,
    children,
    onClick,
    text =false,
    leftIcon,
    rightIcon,
    className,
    ...passProps //những sự kiện ko nghĩ tới sẽ vẫn đc thực hiện
})
 {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // if (disabled) {
    //     delete props.onClick;
    // }
    //remove event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        className,
    });
    return (

        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}

        </Comp>
    );
}
Button.prototype = {
    to:PropTypes.string,
    title:PropTypes.string,
    href:PropTypes.string,
    primary:PropTypes.bool, 
    outline:PropTypes.bool, 
    small:PropTypes.bool, 
    large:PropTypes.bool,
    disabled:PropTypes.bool, 
    rounded:PropTypes.bool,
    children:PropTypes.node.isRequired,
    onClick:PropTypes.bool,
    text:PropTypes.string,
    leftIcon:PropTypes.bool,
    rightIcon:PropTypes.bool,
    className:PropTypes.string,

}

export default Button;