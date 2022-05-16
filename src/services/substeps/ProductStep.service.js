import BaseStepService from './BaseStep.service';
import ProductsStep from 'components/Steps/ProductsStep';
import products from 'common/data/products';
import questionsService from '../../common/constant/questions';

class ProductStepService extends BaseStepService {
    products = products;
    component = ProductsStep;

    getProps(answer) {
        console.log('ProductStepService', answer);
        return questionsService.getProductsForAnswer(answer);
    }
}

const productStepService = new ProductStepService();
export default productStepService;
