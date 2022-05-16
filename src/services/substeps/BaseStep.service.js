class BaseStepService {
    registerComponent(component) {
        this.component = component;
    }

    getComponent() {
        return this.component;
    }

    getProps() {
        return {};
    }
}

export default BaseStepService;