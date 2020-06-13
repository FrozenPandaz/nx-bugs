import React from 'react';
import { render } from '@testing-library/react';

import Lib987 from './lib987';

describe(' Lib987', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib987 />);
    expect(baseElement).toBeTruthy();
  });
});
