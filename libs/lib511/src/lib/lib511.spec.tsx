import React from 'react';
import { render } from '@testing-library/react';

import Lib511 from './lib511';

describe(' Lib511', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib511 />);
    expect(baseElement).toBeTruthy();
  });
});
