import BaseStepService from "./BaseStep.service";
import AreaSize from "components/Steps/AreaSize";

class AreaSizeService extends BaseStepService {
    component = AreaSize;
}

const areaSizeService = new AreaSizeService();
export default areaSizeService;