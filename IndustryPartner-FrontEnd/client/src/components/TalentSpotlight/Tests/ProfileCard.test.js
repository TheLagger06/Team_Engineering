import { render, screen } from '@testing-library/react';

import ProfileCard from '../ProfileCard';

import testData from '../../../utils/testData/testData.js';

const graduate = testData.graduate;

describe(`ProfileCardComponent tests`, () => {


    describe(`render tests`, () => {

        beforeEach(() => {
            render(<ProfileCard graduate={graduate} />);
        })

        test(`should render the graduate's full name`, () => {
            expect(screen.getByText(`${graduate.firstName} ${graduate.lastName}`)).toBeInTheDocument();
        });

        test(`should render the test graduate's 'dfGaduation' date`, () => {
            expect(screen.getByText(graduate.dfGraduationDate)).toBeInTheDocument();
        })

        test(`should render the graduates 'universityDegree'`, () => {
            expect(screen.getByText(graduate.universityDegree)).toBeInTheDocument();
        })

        test(`should render the graduate's 'university' key`, () => {
            expect(screen.getByText(graduate.university)).toBeInTheDocument();
        })

        test(`should render an <img> tag with the src attribute 'ProfileImg.png'`, () => {
            const profileImg = screen.getAllByRole('img');
            expect(profileImg[0]).toHaveAttribute('src', 'profile-placeholder.jpeg');
        })

    })

})