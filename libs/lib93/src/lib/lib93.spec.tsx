import React from 'react';
import { render } from '@testing-library/react';

import Lib93 from './lib93';

describe(' Lib93', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib93 />);
    expect(baseElement).toBeTruthy();
  });
});
