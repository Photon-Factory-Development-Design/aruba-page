import BaseStepService from './BaseStep.service';
import NumberWirelessDevices from 'components/Steps/NumberWirelessDevices';

class ConnectedDeviceService extends BaseStepService {
    component = NumberWirelessDevices;
}

const connectedDevicesService = new ConnectedDeviceService();
export default connectedDevicesService;
