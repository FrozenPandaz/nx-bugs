import React from 'react';
import { render } from '@testing-library/react';

import Lib669 from './lib669';

describe(' Lib669', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib669 />);
    expect(baseElement).toBeTruthy();
  });
});
