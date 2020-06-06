import React from 'react';
import { render } from '@testing-library/react';

import Lib86 from './lib86';

describe(' Lib86', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib86 />);
    expect(baseElement).toBeTruthy();
  });
});
