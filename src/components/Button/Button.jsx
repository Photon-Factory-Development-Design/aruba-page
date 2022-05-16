import React from 'react';
import cn from 'classnames';
import Image from "../Image";
import withStyles from "../../HOC/withStyles";
import styles from './Button.module.css';

const Button = ({className, icon, children, ...props}) => {
    return (
        <button className={cn("outline-none hover:outline-none focus:outline-none", className)} {...props}>
            {icon && <Image src={icon}/>}
            {children}
        </button>
    );
};

export const OutlineButton = withStyles(Button, cn("text-white rounded-xl px-2 p-1 shadow-md border-2 border-white", styles.outline));

export default Button;