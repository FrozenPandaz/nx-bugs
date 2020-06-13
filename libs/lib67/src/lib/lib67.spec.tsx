import React from 'react';
import { render } from '@testing-library/react';

import Lib67 from './lib67';

describe(' Lib67', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib67 />);
    expect(baseElement).toBeTruthy();
  });
});
