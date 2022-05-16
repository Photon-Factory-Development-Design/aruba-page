import products from 'common/data/products';

export const IndustryTypes = {
    HOME_OFFICE: 'home_office',
    RETAIL_CAFE_RESTAURANT: 'retail_cafe_restaruant',
    HOSPITALITY: 'hospitality',
    EDUCATION: 'education',
    PROFESSIONAL_OFFICE: 'professional_office',
    OTHER: 'other'
};

export const CONNECTED_DEVICE_TYPES = {
    ONE_TO_FIFTY: 'one2fifty',
    FIFTY_TO_HUNDRED: 'fifty2hundred',
    HUNDRED_PLUS: 'hundred_plus'
};

export const SIZE_AREA_COVERAGE = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large'
};

export const NETWORK_USAGE = {
    LIGHT: 'light',
    MODERATE: 'moderate',
    HIGH: 'high'
};

export const OUTDOOR_COVERAGE = {
    YES: 'yes',
    NO: 'no'
};

export const PRODUCT_TYPES = {
    RECOMMENDED: 'recommended',
    SWITCH: 'switch'
};

class Question {
    productsMap = {
        [IndustryTypes.HOME_OFFICE]: {
            [CONNECTED_DEVICE_TYPES.ONE_TO_FIFTY]: {
                [SIZE_AREA_COVERAGE.SMALL]: {
                    [NETWORK_USAGE.LIGHT]: {
                        [OUTDOOR_COVERAGE.YES]: {
                            [PRODUCT_TYPES.RECOMMENDED]: [
                                'B07V7T29SS',
                                'B07W7CBKZG',
                                'B07VMT8WK5'
                            ],
                            [PRODUCT_TYPES.SWITCH]: ['B08BFBR5X3', 'B09NLCNGC7']
                        }
                    }
                }
            }
        }
    };

    getProductsForAsins = (asins) => {
        return products.filter((product) =>
            (asins || []).includes(product.data.ASIN.value)
        );
    };

    /**
     * @return Array of Product Asins
     * @param {*} answer array of question answer path
     */
    getProductsForAnswer = (answer) => {
        console.log('getProductsForAnswer', answer, this.productsMap);
        let _productAsins = this.productsMap;

        answer.forEach((item) => {
            console.log('forEach', _productAsins, item);
            if (_productAsins) {
                _productAsins = _productAsins[item];
            }
        });

        console.log('getProductsForAnswer', _productAsins);

        return {
            [PRODUCT_TYPES.RECOMMENDED]: this.getProductsForAsins(
                _productAsins && _productAsins[PRODUCT_TYPES.RECOMMENDED]
            ),
            [PRODUCT_TYPES.SWITCH]: this.getProductsForAsins(
                _productAsins && _productAsins[PRODUCT_TYPES.SWITCH]
            )
        };
    };
}

export default new Question();
