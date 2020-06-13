import React from 'react';
import { render } from '@testing-library/react';

import Lib186 from './lib186';

describe(' Lib186', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib186 />);
    expect(baseElement).toBeTruthy();
  });
});
