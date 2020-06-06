import React from 'react';
import { render } from '@testing-library/react';

import Lib583 from './lib583';

describe(' Lib583', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib583 />);
    expect(baseElement).toBeTruthy();
  });
});
