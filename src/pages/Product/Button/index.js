import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTyes from 'prop-types';

const cx = classNames.bind(styles);


function Button({
    to,
    href,
    primary = false,
    outline = false,
    outlineColor=false,
    small = false,
    large = false,
    disabled = false,
    rounded = false,
    text =false,
    cadetblue=false,
    none=false,
    children,
    onClick,
    rightIcon,
    leftIcon,
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
        outlineColor,
        none,
        small,
        large,
        text,
        disabled,
        rounded,
        className,
        cadetblue
    });
    return (

        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}

        </Comp>
    );
}
Button.prototype= {
    to: PropTyes.string,
    href: PropTyes.string,
    primary: PropTyes.bool,
    outline: PropTyes.bool,
    outlineColor:PropTyes.bool,
    small: PropTyes.bool,
    large: PropTyes.bool,
    disabled: PropTyes.bool,
    rounded: PropTyes.bool,
    text: PropTyes.string,
    cadetblue: PropTyes.bool,
    children: PropTyes.node.isRequired,
    onClick: PropTyes.func,
    rightIcon: PropTyes.node,
    leftIcon: PropTyes.node,
    className: PropTyes.string,
};


export default Button;