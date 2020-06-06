import React from 'react';
import { render } from '@testing-library/react';

import Lib277 from './lib277';

describe(' Lib277', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib277 />);
    expect(baseElement).toBeTruthy();
  });
});
