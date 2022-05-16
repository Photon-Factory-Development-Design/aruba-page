import BaseStepService from './BaseStep.service';
import WifiUsage from 'components/Steps/WifiUsage';

class NetworkUsageService extends BaseStepService {
    component = WifiUsage;
}

const wifiUsageService = new NetworkUsageService();
export default wifiUsageService;
