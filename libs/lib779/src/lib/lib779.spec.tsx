import React from 'react';
import { render } from '@testing-library/react';

import Lib779 from './lib779';

describe(' Lib779', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib779 />);
    expect(baseElement).toBeTruthy();
  });
});
