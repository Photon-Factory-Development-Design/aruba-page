import BaseStepService from './BaseStep.service';
import SupportHighPower from 'components/Steps/SupportHighPower';

class SupportHighPerformanceService extends BaseStepService {
    component = SupportHighPower;
}

const supportHighPerformanceService = new SupportHighPerformanceService();
export default supportHighPerformanceService;
