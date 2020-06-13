import React from 'react';
import { render } from '@testing-library/react';

import Lib49 from './lib49';

describe(' Lib49', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib49 />);
    expect(baseElement).toBeTruthy();
  });
});
