import React from 'react';
import { render } from '@testing-library/react';

import Lib416 from './lib416';

describe(' Lib416', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib416 />);
    expect(baseElement).toBeTruthy();
  });
});
