import React from 'react';
import { render } from '@testing-library/react';

import Lib160 from './lib160';

describe(' Lib160', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib160 />);
    expect(baseElement).toBeTruthy();
  });
});
