import { render, screen } from '@testing-library/react';

import ProfileCardsContainer from '../ProfileCardsContainer';
// '../components/ProfileCardsComponent';

import testData from '../../../../testGraduates.js';

const graduates = testData.graduates;

jest.mock(`../ProfileCard`, () => () => {
    return <mock-profilecard data-testid="ProfileCard" />;
});

describe(`ProfileCardComponent tests`, () => {

    test('should render the expected number of ProfileCardComponents', () => {
        render(<ProfileCardsContainer graduates={graduates} />);
        const profileCardElements = screen.getAllByTestId("ProfileCard");
        expect(profileCardElements.length).toBe(graduates.length);


    })



})

