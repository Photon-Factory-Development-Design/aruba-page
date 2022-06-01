import React from 'react';
import BaseStep from '../BaseStep';
import ProductCard from 'components/ProductCard';
import { PRODUCT_TYPES } from '../../../common/constant';

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
            onGoBack={onGoBack}
            {...props}>
            <div
                className={
                    'container flex flex-wrap justify-center max-w-fit m-auto'
                }>
                {(recommends || []).map((product) => (
                    <div className="m-2" key={product.url}>
                        <ProductCard
                            type={'Access Point'}
                            url={product.url}
                            {...product.data}
                        />
                    </div>
                ))}
                {(switches || []).map((product) => (
                    <div className="m-2" key={product.url}>
                        <ProductCard
                            type={'Switch'}
                            url={product.url}
                            {...product.data}
                        />
                    </div>
                ))}
            </div>
        </BaseStep>
    );
};

export default ProductsStep;
