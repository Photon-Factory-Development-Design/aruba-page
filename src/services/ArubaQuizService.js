import React from 'react';
import categoryStep from './substeps/CategoryStep.service';
import connectedDevicesService from './substeps/ConnectedDevices.service';
import areaSizeService from './substeps/AreaSize.service';
import networkUsageService from './substeps/NetworkUsage.service';
import coverageService from './substeps/Coverage.service';
import productStepService from './substeps/ProductStep.service';

const useForceUpdater = () => {
    const [count, setCount] = React.useState(0);

    const updater = React.useCallback(() => {
        setCount((prev) => prev + 1);
    }, []);

    return {
        updater,
        count
    };
};

class ArubaQuizService {
    updater = null;
    hooks = {
        useForceUpdater
    };
    steps = [
        categoryStep,
        connectedDevicesService,
        areaSizeService,
        networkUsageService,
        coverageService,
        productStepService
    ];
    currentStep = 1;
    question = null;

    update() {
        if (this.updater && typeof this.updater === 'function') {
            this.updater();
        }
    }

    registerUpdater(updater) {
        this.updater = updater;
    }

    getQuizComponent() {
        return this.steps[this.currentStep].getComponent();
    }

    getQuizProps() {
        const props = this.steps[this.currentStep].getProps(this.question);
        return {
            ...props,
            onUpdateQuestion: this.onUpdateQuestion,
            onGoBack: this.onGoBack
        };
    }

    onUpdateQuestion = (answer) => {
        if (!this.question) {
            this.question = [];
        }

        this.question[this.currentStep] = answer;
        this.currentStep++;

        this.update();
    };

    onGoBack = () => {
        this.currentStep = Math.max(this.currentStep - 1, 0);
        this.update();
    };

    resetQuiz() {
        this.currentStep = 0;
        this.update();
    }
}

const service = new ArubaQuizService();

export default service;
