import { render, screen, waitFor } from '@testing-library/react';

import Main from '../Main';

jest.mock(`../ProfileCardsContainer`, () => () => {
    return <mock-profilecardscomponent data-testid="ProfileCardsContainer" />;
})

describe('Main component tests', () => {
    test.skip(`It should render the ProfileCardsContainer`, async () => {
        render(<Main />);

        await waitFor(() => expect(screen.getByTestId('ProfileCardsContainer')).toBeInTheDocument());
    })

});
