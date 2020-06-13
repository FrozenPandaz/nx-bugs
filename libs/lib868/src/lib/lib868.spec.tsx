import React from 'react';
import { render } from '@testing-library/react';

import Lib868 from './lib868';

describe(' Lib868', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib868 />);
    expect(baseElement).toBeTruthy();
  });
});
