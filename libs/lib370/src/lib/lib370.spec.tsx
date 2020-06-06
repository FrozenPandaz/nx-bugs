import React from 'react';
import { render } from '@testing-library/react';

import Lib370 from './lib370';

describe(' Lib370', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib370 />);
    expect(baseElement).toBeTruthy();
  });
});
