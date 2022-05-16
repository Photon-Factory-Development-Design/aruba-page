import React from 'react';
import BaseStep from '../BaseStep';
import { OutlineButton } from '../../Button';
import { OUTDOOR_COVERAGE } from '../../../common/constant/questions';

const Coverage = ({ onUpdateQuestion, onGoBack }) => {
    const title = 'Looking to deploy a new network for your site?';

    return (
        <BaseStep title={title} subtitle={''} onGoBack={onGoBack}>
            <div
                className={
                    'grid-cols-1 sm:grid-cols-2 gap-4 grid max-w-5xl m-auto'
                }>
                <OutlineButton
                    className={'px-5'}
                    onClick={() => onUpdateQuestion(OUTDOOR_COVERAGE.YES)}>
                    Yes
                </OutlineButton>
                <OutlineButton
                    className={'px-5'}
                    onClick={() => onUpdateQuestion(OUTDOOR_COVERAGE.NO)}>
                    No
                </OutlineButton>
            </div>
        </BaseStep>
    );
};

export default Coverage;
