import React from 'react';
import { render } from '@testing-library/react';

import Lib524 from './lib524';

describe(' Lib524', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib524 />);
    expect(baseElement).toBeTruthy();
  });
});
