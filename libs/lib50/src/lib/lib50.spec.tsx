import React from 'react';
import { render } from '@testing-library/react';

import Lib50 from './lib50';

describe(' Lib50', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib50 />);
    expect(baseElement).toBeTruthy();
  });
});
