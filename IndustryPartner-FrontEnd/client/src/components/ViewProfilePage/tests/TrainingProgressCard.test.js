import { render, screen } from '@testing-library/react';

import TrainingProgressCard from '../TrainingProgressCard';

import testData from '../../../utils/testData/testData.js'
const graduate = testData.graduate;

describe(`TrainingProgressCard tests`, () => {

    beforeEach(() => {
        render(<TrainingProgressCard training={graduate.trainingProgress} />)
    });

    test('should render each training module name to the screen', () => {

        for (let i = 0, n = graduate.trainingProgress.length; i < n; i++) {
            expect(screen.getByText(graduate.trainingProgress[i].module)).toBeInTheDocument();
        }
    });

    test('should render each training module challenge to the screen', () => {

        for (let i = 0, n = graduate.trainingProgress.length; i < n; i++) {
            expect(screen.getByText(graduate.trainingProgress[i].challenge)).toBeInTheDocument();
        }
    });
});