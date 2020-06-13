import React from 'react';
import { render } from '@testing-library/react';

import Lib328 from './lib328';

describe(' Lib328', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib328 />);
    expect(baseElement).toBeTruthy();
  });
});
