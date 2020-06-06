import React from 'react';
import { render } from '@testing-library/react';

import Lib139 from './lib139';

describe(' Lib139', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib139 />);
    expect(baseElement).toBeTruthy();
  });
});
