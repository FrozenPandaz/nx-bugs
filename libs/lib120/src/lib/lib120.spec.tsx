import React from 'react';
import { render } from '@testing-library/react';

import Lib120 from './lib120';

describe(' Lib120', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib120 />);
    expect(baseElement).toBeTruthy();
  });
});
