import React from 'react';
import BaseStep from '../BaseStep';
import ProductCard from 'components/ProductCard';
import { PRODUCT_TYPES } from '../../../common/constant/questions';

const ProductsStep = (props) => {
    const recommends = props[PRODUCT_TYPES.RECOMMENDED];
    const switches = props[PRODUCT_TYPES.SWITCH];
    const { onGoBack } = props;

    return (
        <BaseStep
            title={
                "Based on your selections, here's what we recommend for you."
            }
            subtitle={'Select one switch and one access point:'}
            onGoBack={onGoBack}>
            <div
                className={
                    'container grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 grid max-w-fit m-auto'
                }>
                {(recommends || []).map((product) => (
                    <ProductCard
                        type={'Recommended'}
                        key={product.url}
                        url={product.url}
                        {...product.data}
                    />
                ))}
                {(switches || []).map((product) => (
                    <ProductCard
                        type={'Switch'}
                        key={product.url}
                        url={product.url}
                        {...product.data}
                    />
                ))}
            </div>
        </BaseStep>
    );
};

export default ProductsStep;
