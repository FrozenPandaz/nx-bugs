import React from 'react';
import { render } from '@testing-library/react';

import Lib521 from './lib521';

describe(' Lib521', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib521 />);
    expect(baseElement).toBeTruthy();
  });
});
