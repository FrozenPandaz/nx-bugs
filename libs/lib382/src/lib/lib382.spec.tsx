import React from 'react';
import { render } from '@testing-library/react';

import Lib382 from './lib382';

describe(' Lib382', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib382 />);
    expect(baseElement).toBeTruthy();
  });
});
