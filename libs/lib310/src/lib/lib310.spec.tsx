import React from 'react';
import { render } from '@testing-library/react';

import Lib310 from './lib310';

describe(' Lib310', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib310 />);
    expect(baseElement).toBeTruthy();
  });
});
