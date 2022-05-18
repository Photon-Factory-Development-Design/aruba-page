import React from 'react';
import './index.css';
import Image from './components/Image';
import arubaService from './services/ArubaQuizService';

function App() {
    const { updater } = arubaService.hooks.useForceUpdater();

    React.useEffect(() => {
        arubaService.registerUpdater(updater);
        arubaService.resetQuiz();
    }, [updater]);

    const QuizComponent = arubaService.getQuizComponent(),
        quizProps = arubaService.getQuizProps();

    return (
        <div className="relative container flex flex-col mx-auto">
            <div></div>
            <div className={'z-1 relative'}>
                <QuizComponent {...quizProps} />
                <Image
                    className={'absolute h-full w-full z-0 object-cover top-0'}
                    style={{ zIndex: -1 }}
                    src={'background.png'}
                    alt={'Background'}
                />
            </div>
        </div>
    );
}

export default App;
