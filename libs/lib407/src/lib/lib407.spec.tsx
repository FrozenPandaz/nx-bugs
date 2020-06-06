import React from 'react';
import { render } from '@testing-library/react';

import Lib407 from './lib407';

describe(' Lib407', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib407 />);
    expect(baseElement).toBeTruthy();
  });
});
