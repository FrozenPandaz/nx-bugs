import React from 'react';
import { render } from '@testing-library/react';

import Lib320 from './lib320';

describe(' Lib320', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib320 />);
    expect(baseElement).toBeTruthy();
  });
});
