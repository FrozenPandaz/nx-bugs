import React from 'react';
import { render } from '@testing-library/react';

import Lib785 from './lib785';

describe(' Lib785', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib785 />);
    expect(baseElement).toBeTruthy();
  });
});
