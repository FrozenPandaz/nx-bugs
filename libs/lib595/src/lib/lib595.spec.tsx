import React from 'react';
import { render } from '@testing-library/react';

import Lib595 from './lib595';

describe(' Lib595', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib595 />);
    expect(baseElement).toBeTruthy();
  });
});
