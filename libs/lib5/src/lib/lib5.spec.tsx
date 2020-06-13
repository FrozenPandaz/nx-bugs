import React from 'react';
import { render } from '@testing-library/react';

import Lib5 from './lib5';

describe(' Lib5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib5 />);
    expect(baseElement).toBeTruthy();
  });
});
