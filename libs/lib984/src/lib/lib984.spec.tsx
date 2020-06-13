import React from 'react';
import { render } from '@testing-library/react';

import Lib984 from './lib984';

describe(' Lib984', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib984 />);
    expect(baseElement).toBeTruthy();
  });
});
