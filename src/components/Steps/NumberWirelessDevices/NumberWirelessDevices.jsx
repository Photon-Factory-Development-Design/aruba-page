import React from 'react';
import BaseStep from '../BaseStep';
import { OutlineButton } from '../../Button';
import { CONNECTED_DEVICE_TYPES } from '../../../common/constant/questions';

const NumberWirelessDevices = ({
    onUpdateQuestion,
    onGoBack,
    currentStep,
    ...props
}) => {
    const title = 'Number of wireless devices';
    const subTitle = (
        <>
            How many devices are you connecting to your network? Think <br />
            laptops, phones, tablets, security cameras, POS terminals, and smart{' '}
            <br /> devices like lighting and climate control.
        </>
    );

    return (
        <BaseStep
            title={title}
            subtitle={subTitle}
            onGoBack={onGoBack}
            currentStep={currentStep}
            {...props}>
            <div
                className={
                    'grid-cols-1 sm:grid-cols-3 gap-4 grid max-w-5xl m-auto'
                }>
                <OutlineButton
                    className={'px-5'}
                    onClick={() =>
                        onUpdateQuestion(CONNECTED_DEVICE_TYPES.ONE_TO_FIFTY)
                    }>
                    1 to 50
                </OutlineButton>
                <OutlineButton
                    className={'px-5'}
                    onClick={() =>
                        onUpdateQuestion(
                            CONNECTED_DEVICE_TYPES.FIFTY_TO_HUNDRED
                        )
                    }>
                    51 to 100
                </OutlineButton>
                <OutlineButton
                    className={'px-5'}
                    onClick={() =>
                        onUpdateQuestion(CONNECTED_DEVICE_TYPES.HUNDRED_PLUS)
                    }>
                    100+
                </OutlineButton>
            </div>
        </BaseStep>
    );
};

export default NumberWirelessDevices;
