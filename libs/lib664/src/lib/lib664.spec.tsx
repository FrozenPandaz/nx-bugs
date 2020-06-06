import React from 'react';
import { render } from '@testing-library/react';

import Lib664 from './lib664';

describe(' Lib664', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib664 />);
    expect(baseElement).toBeTruthy();
  });
});
