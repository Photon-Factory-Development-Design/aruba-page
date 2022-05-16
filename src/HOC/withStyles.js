import React from 'react';
import cn from 'classnames'

const withStyles = (WrappedComponent, className) => {
    return class extends React.Component {
        render() {
            const { className: propsClassName, ...props } = this.props;
            return <WrappedComponent className={cn(className, propsClassName)} {...props} />;
        }
    }
}

export default withStyles;