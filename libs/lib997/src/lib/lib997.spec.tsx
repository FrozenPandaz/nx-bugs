import React from 'react';
import { render } from '@testing-library/react';

import Lib997 from './lib997';

describe(' Lib997', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib997 />);
    expect(baseElement).toBeTruthy();
  });
});
