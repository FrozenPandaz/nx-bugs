import React from 'react';
import { render } from '@testing-library/react';

import Lib930 from './lib930';

describe(' Lib930', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib930 />);
    expect(baseElement).toBeTruthy();
  });
});
