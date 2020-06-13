import React from 'react';
import { render } from '@testing-library/react';

import Lib362 from './lib362';

describe(' Lib362', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib362 />);
    expect(baseElement).toBeTruthy();
  });
});
