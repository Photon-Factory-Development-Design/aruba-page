import React from 'react';
import BaseStep from '../BaseStep';
import { OutlineButton } from '../../Button';
import { SUPPORT_HIGH_POWERED } from 'common/constant';

const Coverage = ({ onUpdateQuestion, onGoBack, currentStep, ...props }) => {
    const title = 'Support high power?';

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
                    onClick={() => onUpdateQuestion(SUPPORT_HIGH_POWERED.YES)}>
                    Yes
                </OutlineButton>
                <OutlineButton
                    className={'px-5'}
                    onClick={() => onUpdateQuestion(SUPPORT_HIGH_POWERED.NO)}>
                    No
                </OutlineButton>
            </div>
        </BaseStep>
    );
};

export default Coverage;
