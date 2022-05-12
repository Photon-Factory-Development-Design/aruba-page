import BaseStepService from "./BaseStep.service";
import NumberWirelessDevices from "components/Steps/NumberWirelessDevices";

class WirelessDeviceNumberService extends BaseStepService {
    component = NumberWirelessDevices;
}

const wirelessDeviceNumberService = new WirelessDeviceNumberService();
export default wirelessDeviceNumberService;