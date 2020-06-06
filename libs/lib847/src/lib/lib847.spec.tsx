import React from 'react';
import { render } from '@testing-library/react';

import Lib847 from './lib847';

describe(' Lib847', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib847 />);
    expect(baseElement).toBeTruthy();
  });
});
