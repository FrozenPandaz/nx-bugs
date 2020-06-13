import React from 'react';
import { render } from '@testing-library/react';

import Lib40 from './lib40';

describe(' Lib40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib40 />);
    expect(baseElement).toBeTruthy();
  });
});
