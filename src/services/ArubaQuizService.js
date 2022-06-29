import React from 'react';
import categoryStep from './substeps/CategoryStep.service';
import connectedDevicesService from './substeps/ConnectedDevices.service';
import areaSizeService from './substeps/AreaSize.service';
import networkUsageService from './substeps/NetworkUsage.service';
import coverageService from './substeps/Coverage.service';
import productStepService from './substeps/ProductStep.service';
import questionService from 'common/constant/questions';
import supportHighPerformanceService from 'services/substeps/SupportHighPerformance.service';
import supportWifi6DevicesService from 'services/substeps/SupportWifi6Devices.service';

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
    steps = {
        industry: categoryStep,
        device: connectedDevicesService,
        area: areaSizeService,
        network: networkUsageService,
        outdoor: coverageService,
        power: supportHighPerformanceService,
        wifi: supportWifi6DevicesService,
        product: productStepService
    };
    currentStep = 1;
    question = null;
    questionService = questionService;

    update() {
        if (this.updater && typeof this.updater === 'function') {
            this.updater();
        }
    }

    getCurrentStep = () => {
        const questionType = this.questionService.getQuestionType(
            this.question || []
        );
        return this.steps[questionType];
    };

    registerUpdater(updater) {
        this.updater = updater;
    }

    getQuizComponent() {
        const currentStep = this.getCurrentStep();
        return currentStep.getComponent();
    }

    getQuizProps() {
        const currentStep = this.getCurrentStep();
        const props = currentStep.getProps(this.question);
        return {
            ...props,
            onUpdateQuestion: this.onUpdateQuestion,
            onGoBack: this.onGoBack,
            isFirstStep: (this.question || []).length === 0,
            onStartOver: this.onStartOver
        };
    }

    onStartOver = () => {
        this.question = [];
        this.update();
    };

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
        this.question = (this.question || []).slice(0, this.currentStep);
        this.update();
    };

    resetQuiz() {
        this.currentStep = 0;
        this.update();
    }
}

const service = new ArubaQuizService();

export default service;
