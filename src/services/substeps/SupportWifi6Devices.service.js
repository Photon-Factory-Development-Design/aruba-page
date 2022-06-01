import BaseStepService from './BaseStep.service';
import Wifi6Support from 'components/Steps/Wifi6Support';

class SupportWifi6DevicesService extends BaseStepService {
    component = Wifi6Support;
}

const supportWifi6DevicesService = new SupportWifi6DevicesService();
export default supportWifi6DevicesService;
