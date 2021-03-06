import React from 'react';
import cn from 'classnames';
import Button from 'components/Button';
import withStyles from 'HOC/withStyles';
import styles from './WifiUsage.module.css';
import BaseStep from '../BaseStep';
import { NETWORK_USAGE } from '../../../common/constant/questions';

const UsageButton = withStyles(
    Button,
    cn(
        styles.category_button,
        'w-72 text-white flex flex-column items-center rounded-sm py-4 px-2 shadow-md'
    )
);

const WifiUsage = ({ onUpdateQuestion, onGoBack }) => {
    const title = 'How do you describe your wi-fi usage?';

    return (
        <BaseStep title={title} subtitle={''} onGoBack={onGoBack}>
            <div
                className={
                    'grid-cols-1 lg:grid-cols-3 gap-4 grid max-w-screen-lg m-auto'
                }>
                <UsageButton
                    icon={'icon-usage-light.png'}
                    onClick={() => onUpdateQuestion(NETWORK_USAGE.LIGHT)}>
                    <span className={'font-bold'}>Light Usage</span>
                    <span className={'font-light'}>
                        Internet browsing and file-sharing apps like Google Docs
                        & SharePoint
                    </span>
                </UsageButton>
                <UsageButton
                    icon={'icon-usage-medium.png'}
                    onClick={() => onUpdateQuestion(NETWORK_USAGE.MODERATE)}>
                    <span className={'font-bold'}>Light Usage</span>
                    <span className={'font-light'}>
                        Internet browsing and file-sharing apps like Google Docs
                        & SharePoint
                    </span>
                </UsageButton>
                <UsageButton
                    icon={'icon-usage-high.png'}
                    onClick={() => onUpdateQuestion(NETWORK_USAGE.HIGH)}>
                    <span className={'font-bold'}>Light Usage</span>
                    <span className={'font-light'}>
                        Internet browsing and file-sharing apps like Google Docs
                        & SharePoint
                    </span>
                </UsageButton>
            </div>
        </BaseStep>
    );
};

export default WifiUsage;
