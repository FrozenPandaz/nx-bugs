import React from 'react';
import { render } from '@testing-library/react';

import Lib811 from './lib811';

describe(' Lib811', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib811 />);
    expect(baseElement).toBeTruthy();
  });
});
