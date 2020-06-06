import React from 'react';
import { render } from '@testing-library/react';

import Lib846 from './lib846';

describe(' Lib846', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib846 />);
    expect(baseElement).toBeTruthy();
  });
});
