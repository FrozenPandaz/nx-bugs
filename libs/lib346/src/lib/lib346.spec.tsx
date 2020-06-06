import React from 'react';
import { render } from '@testing-library/react';

import Lib346 from './lib346';

describe(' Lib346', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib346 />);
    expect(baseElement).toBeTruthy();
  });
});
