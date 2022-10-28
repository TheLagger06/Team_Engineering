import { render, screen } from '@testing-library/react';

import Header from '../components/Header';


describe('Header component tests', () => {
    test(`Should match the snapshot`, () => {

        expect(render(<Header />)).toMatchSnapshot();


    })

});
