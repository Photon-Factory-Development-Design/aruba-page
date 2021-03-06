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
    console.log('QuizComponent', QuizComponent, quizProps);

    return (
        <div className="relative">
            <Image
                className={'absolute h-full w-full z-0 object-cover'}
                src={'background.png'}
                alt={'Background'}
            />
            <div className={'z-1 relative'}>
                <QuizComponent {...quizProps} />
            </div>
        </div>
    );
}

export default App;
