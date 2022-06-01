import React from 'react';
import BaseStep from '../BaseStep';
import { OutlineButton } from '../../Button';
import { SUPPORT_WIFI_6_DEVICES } from 'common/constant';

const Wifi6Support = ({ onUpdateQuestion, onGoBack, currentStep, ...props }) => {
    const title = 'Support wifi 6 devices?';

    return (
        <BaseStep
            title={title}
            subtitle={''}
            onGoBack={onGoBack}
            currentStep={currentStep}
            {...props}>
            <div
                className={
                    'grid-cols-1 sm:grid-cols-2 gap-4 grid max-w-5xl m-auto'
                }>
                <OutlineButton
                    className={'px-5'}
                    onClick={() =>
                        onUpdateQuestion(SUPPORT_WIFI_6_DEVICES.YES)
                    }>
                    Yes
                </OutlineButton>
                <OutlineButton
                    className={'px-5'}
                    onClick={() => onUpdateQuestion(SUPPORT_WIFI_6_DEVICES.NO)}>
                    No
                </OutlineButton>
            </div>
        </BaseStep>
    );
};

export default Wifi6Support;
