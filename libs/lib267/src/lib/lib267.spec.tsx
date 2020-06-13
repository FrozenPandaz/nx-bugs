import React from 'react';
import { render } from '@testing-library/react';

import Lib267 from './lib267';

describe(' Lib267', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib267 />);
    expect(baseElement).toBeTruthy();
  });
});
