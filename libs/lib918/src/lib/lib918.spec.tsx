import React from 'react';
import { render } from '@testing-library/react';

import Lib918 from './lib918';

describe(' Lib918', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib918 />);
    expect(baseElement).toBeTruthy();
  });
});
