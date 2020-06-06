import React from 'react';
import { render } from '@testing-library/react';

import Lib98 from './lib98';

describe(' Lib98', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib98 />);
    expect(baseElement).toBeTruthy();
  });
});
