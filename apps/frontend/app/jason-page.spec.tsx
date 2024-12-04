import { render } from '@testing-library/react';

import JasonPage from './jason-page';

describe('JasonPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<JasonPage />);
    expect(baseElement).toBeTruthy();
  });
});
