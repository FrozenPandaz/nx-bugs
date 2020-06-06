import React from 'react';
import { render } from '@testing-library/react';

import Lib450 from './lib450';

describe(' Lib450', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib450 />);
    expect(baseElement).toBeTruthy();
  });
});
