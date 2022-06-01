import React from 'react';
import BaseStep from '../BaseStep';
import { OutlineButton } from '../../Button';
import { SIZE_AREA_COVERAGE } from '../../../common/constant';

const AreaSize = ({ onUpdateQuestion, onGoBack, currentStep, ...props }) => {
    const title = 'Select size of area you need to cover';

    return (
        <BaseStep
            title={title}
            subtitle={''}
            onGoBack={onGoBack}
            currentStep={currentStep}
            {...props}>
            <div
                className={
                    'grid-cols-1 sm:grid-cols-3 gap-4 grid max-w-5xl m-auto'
                }>
                <OutlineButton
                    onClick={() => onUpdateQuestion(SIZE_AREA_COVERAGE.SMALL)}>
                    1-2500 sq/ft, 1-225 sq/m
                </OutlineButton>
                <OutlineButton
                    onClick={() => onUpdateQuestion(SIZE_AREA_COVERAGE.MEDIUM)}>
                    2501-5000 sq/ft, 225 - 475 sq/m
                </OutlineButton>
                <OutlineButton
                    onClick={() => onUpdateQuestion(SIZE_AREA_COVERAGE.LARGE)}>
                    > 5000 sq/ft, > 475 sq/m
                </OutlineButton>
            </div>
        </BaseStep>
    );
};

export default AreaSize;
