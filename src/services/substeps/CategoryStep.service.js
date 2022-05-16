import BaseStepService from "./BaseStep.service";
import ProductCategory from 'components/Steps/ProductCategory';

class CategoryService extends BaseStepService {
    component = ProductCategory;
}

const categoryService = new CategoryService();
export default categoryService;