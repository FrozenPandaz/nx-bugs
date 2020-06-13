import React from 'react';
import { render } from '@testing-library/react';

import Lib537 from './lib537';

describe(' Lib537', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib537 />);
    expect(baseElement).toBeTruthy();
  });
});
