import React from 'react';
import { render } from '@testing-library/react';

import Lib926 from './lib926';

describe(' Lib926', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib926 />);
    expect(baseElement).toBeTruthy();
  });
});
