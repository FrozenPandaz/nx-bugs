import React from 'react';
import { render } from '@testing-library/react';

import Lib59 from './lib59';

describe(' Lib59', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib59 />);
    expect(baseElement).toBeTruthy();
  });
});
