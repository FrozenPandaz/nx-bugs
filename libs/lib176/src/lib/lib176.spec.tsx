import React from 'react';
import { render } from '@testing-library/react';

import Lib176 from './lib176';

describe(' Lib176', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib176 />);
    expect(baseElement).toBeTruthy();
  });
});
