import React from 'react';
import { render } from '@testing-library/react';

import Lib252 from './lib252';

describe(' Lib252', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib252 />);
    expect(baseElement).toBeTruthy();
  });
});
