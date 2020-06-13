import React from 'react';
import { render } from '@testing-library/react';

import Lib870 from './lib870';

describe(' Lib870', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib870 />);
    expect(baseElement).toBeTruthy();
  });
});
