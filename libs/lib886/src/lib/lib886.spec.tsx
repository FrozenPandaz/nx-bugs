import React from 'react';
import { render } from '@testing-library/react';

import Lib886 from './lib886';

describe(' Lib886', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib886 />);
    expect(baseElement).toBeTruthy();
  });
});
