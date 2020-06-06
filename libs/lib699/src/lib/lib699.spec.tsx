import React from 'react';
import { render } from '@testing-library/react';

import Lib699 from './lib699';

describe(' Lib699', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib699 />);
    expect(baseElement).toBeTruthy();
  });
});
