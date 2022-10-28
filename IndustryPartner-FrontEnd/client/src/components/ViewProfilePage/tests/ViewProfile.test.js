import { render, screen } from '@testing-library/react';

import ViewProfile from '../ViewProfile';

import AchievementsCard from '../AchievementsCard';
import BadgesCard from '../BadgesCard';
import DueDiligenceCard from '../DueDiligenceCard';
import FeedbackCard from '../FeedbackCard';
import FlairCard from '../FlairCard';
import PersonalityType from '../PersonalityType';
import ProfessionalSkills from '../ProfessionalSkills';
import ProfileCard from '../ProfileCard';
import QualificationsCard from '../QualificationsCard';
import TrainingProgressCard from '../TrainingProgressCard';



jest.mock(`../AchievementsCard`, () => () => {
    return <mock-achievements data-testid="achievements" />;
});
jest.mock(`../BadgesCard`, () => () => {
    return <mock-badgescard data-testid="badges" />;
})
jest.mock(`../DueDiligenceCard`, () => () => {
    return <mock-diligence data-testid="diligence" />
})
jest.mock(`../FeedbackCard`, () => () => {
    return <mock-diligence data-testid="feedback" />
})
jest.mock(`../FlairCard`, () => () => {
    return <mock-diligence data-testid="flair" />
})
jest.mock(`../PersonalityType`, () => () => {
    return <mock-diligence data-testid="personality" />
})
jest.mock(`../ProfessionalSkills`, () => () => {
    return <mock-diligence data-testid="professional" />
})
jest.mock(`../ProfileCard`, () => () => {
    return <mock-diligence data-testid="profile" />
})
jest.mock(`../QualificationsCard`, () => () => {
    return <mock-diligence data-testid="qualifications" />
})
jest.mock(`../TrainingProgressCard`, () => () => {
    return <mock-diligence data-testid="training" />
})

describe(`ViewProfile tests`, () => {


    describe('Render tests', () => {


        beforeEach(() => {
            render(<ViewProfile />);
        })

        test('should render the Achievement card', () => {
            expect(screen.getByTestId(`achievements`)).toBeInTheDocument();
        });

        test('should render the Badges card', () => {
            expect(screen.getByTestId(`badges`)).toBeInTheDocument();
        });

        test('should render the DueDiligence card', () => {
            expect(screen.getByTestId(`diligence`)).toBeInTheDocument();
        });

        test('should render the FeedbackCard', () => {
            expect(screen.getByTestId(`feedback`)).toBeInTheDocument();
        });

        test('should render the FlairCard', () => {
            expect(screen.getByTestId(`flair`)).toBeInTheDocument();
        });

        test('should render the PersonalityType card', () => {
            expect(screen.getByTestId(`personality`)).toBeInTheDocument();
        });

        test('should render the ProfessionalSkills card', () => {
            expect(screen.getByTestId(`professional`)).toBeInTheDocument();
        });

        test('should render the ProfileCard', () => {
            expect(screen.getByTestId(`profile`)).toBeInTheDocument();
        });

        test('should render the QualificationsCard', () => {
            expect(screen.getByTestId(`qualifications`)).toBeInTheDocument();
        });

        test('should render the TrainingProgressCard', () => {
            expect(screen.getByTestId(`training`)).toBeInTheDocument();
        });
    });
});