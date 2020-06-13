import React from 'react';
import { render } from '@testing-library/react';

import Lib497 from './lib497';

describe(' Lib497', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib497 />);
    expect(baseElement).toBeTruthy();
  });
});
