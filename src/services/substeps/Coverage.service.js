import BaseStepService from './BaseStep.service';
import NewNetwork from 'components/Steps/NewNetwork';

class CoverageService extends BaseStepService {
    component = NewNetwork;
}

const coverageService = new CoverageService();
export default coverageService;
