import React from 'react';
import { render } from '@testing-library/react';

import Lib237 from './lib237';

describe(' Lib237', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib237 />);
    expect(baseElement).toBeTruthy();
  });
});
