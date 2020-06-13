import React from 'react';
import { render } from '@testing-library/react';

import Lib809 from './lib809';

describe(' Lib809', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib809 />);
    expect(baseElement).toBeTruthy();
  });
});
