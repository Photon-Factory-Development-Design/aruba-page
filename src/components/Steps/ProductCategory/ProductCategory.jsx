import React from 'react';
import cn from 'classnames';
import Button from 'components/Button';
import withStyles from 'HOC/withStyles';
import styles from './ProductCategory.module.css';
import BaseStep from '../BaseStep';
import { IndustryTypes } from '../../../common/constant/questions';

const CategoryButton = withStyles(
    Button,
    cn(
        styles.category_button,
        'w-72 text-white flex flex-col items-center rounded-sm py-2 shadow-md'
    )
);

const ProductCategory = ({
    onUpdateQuestion,
    onGoBack,
    currentStep,
    ...props
}) => {
    const title = (
        <>
            Tell us about your space and network needs. <br /> We'll show you
            the right solution.
        </>
    );
    const subTitle = 'Select the industry that best describes your business:';

    return (
        <BaseStep
            title={title}
            subtitle={subTitle}
            onGoBack={onGoBack}
            currentStep={currentStep}
            {...props}>
            <div
                className={
                    'grid-cols-1 md:grid-cols-2 gap-4 grid max-w-5xl m-auto'
                }>
                <CategoryButton
                    icon={'icons-white_foodbev.png'}
                    onClick={() => onUpdateQuestion(IndustryTypes.HOME_OFFICE)}>
                    Retail / Cafe / Restaurant
                </CategoryButton>
                <CategoryButton
                    icon={'icons-white_Healthcare.png'}
                    onClick={() =>
                        onUpdateQuestion(IndustryTypes.PROFESSIONAL_OFFICE)
                    }>
                    Professional Office / Medical Office
                </CategoryButton>
                <CategoryButton
                    icon={'icons-white_hospitality.png'}
                    onClick={() => onUpdateQuestion(IndustryTypes.HOSPITALITY)}>
                    Hospitality
                </CategoryButton>
                <CategoryButton
                    icon={'icons-white_hotel.png'}
                    onClick={() => onUpdateQuestion(IndustryTypes.HOME_OFFICE)}>
                    Home Office / Residential
                </CategoryButton>
                <CategoryButton
                    icon={'education-icon-1.png'}
                    onClick={() => onUpdateQuestion(IndustryTypes.EDUCATION)}>
                    Education
                </CategoryButton>
                <CategoryButton
                    icon={'icons-white_other.png'}
                    onClick={() => onUpdateQuestion(IndustryTypes.OTHER)}>
                    Other
                </CategoryButton>
            </div>
        </BaseStep>
    );
};

export default ProductCategory;
