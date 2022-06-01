import React from 'react';
import cn from 'classnames';
import Button from '../../Button';
import withStyles from '../../../HOC/withStyles';

const BackButton = withStyles(
    Button,
    cn(
        'w-24 rounded-3xl py-2 shadow-md bg-white font-bold text-amber-600 block m-2'
    )
);

const BaseStep = ({
    title,
    subtitle,
    children,
    onGoBack,
    onStartOver,
    isFirstStep
}) => {
    return (
        <div className={'p-5 relative'}>
            {!isFirstStep && (
                <React.Fragment>
                    <BackButton onClick={onGoBack}>Back</BackButton>
                    <BackButton onClick={onStartOver}>Start Over</BackButton>
                </React.Fragment>
            )}
            <div className={'text-center text-white'}>
                <h2 className={'text-3xl font-bold'}>{title}</h2>
                <p className={'py-4 text-xl'}>{subtitle}</p>
            </div>
            <div
                className={cn('flex flex-row pb-16', {
                    'pb-2': isFirstStep
                })}>
                {children}
            </div>
        </div>
    );
};

export default BaseStep;
