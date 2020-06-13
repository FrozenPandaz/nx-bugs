import React from 'react';
import { render } from '@testing-library/react';

import Lib234 from './lib234';

describe(' Lib234', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib234 />);
    expect(baseElement).toBeTruthy();
  });
});
