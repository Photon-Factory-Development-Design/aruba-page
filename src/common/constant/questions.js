import products from 'common/data/products';
import { IndustryTypes, PRODUCT_TYPES } from 'common/constant';
import { home } from 'common/constant/questions/home';
import { education } from 'common/constant/questions/education';
import { hospitality } from 'common/constant/questions/hospitality';
import { professionalOffice } from 'common/constant/questions/profession-office';
import { other } from 'common/constant/questions/other';
import { retail } from 'common/constant/questions/retail';

class Question {
    productsMap = {
        [IndustryTypes.HOME_OFFICE]: home,
        [IndustryTypes.EDUCATION]: education,
        [IndustryTypes.HOSPITALITY]: hospitality,
        [IndustryTypes.PROFESSIONAL_OFFICE]: professionalOffice,
        [IndustryTypes.RETAIL_CAFE_RESTAURANT]: retail,
        [IndustryTypes.OTHER]: other
    };

    getProductsForAsins = (asins) => {
        return products.filter((product) =>
            (asins || []).includes(product.data.ASIN.value)
        );
    };

    getQuestionType = (answer) => {
        let productsMap = this.productsMap;

        answer.forEach((item) => {
            console.log('forEach', productsMap, item);
            if (productsMap) {
                productsMap = productsMap[item];
            }
        });

        return Object.keys(productsMap)[0].split('_')[0];
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
