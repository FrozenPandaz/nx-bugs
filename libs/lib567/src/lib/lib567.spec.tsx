import React from 'react';
import { render } from '@testing-library/react';

import Lib567 from './lib567';

describe(' Lib567', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib567 />);
    expect(baseElement).toBeTruthy();
  });
});
