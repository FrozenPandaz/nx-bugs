import React from 'react';
import { render } from '@testing-library/react';

import Lib125 from './lib125';

describe(' Lib125', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib125 />);
    expect(baseElement).toBeTruthy();
  });
});
