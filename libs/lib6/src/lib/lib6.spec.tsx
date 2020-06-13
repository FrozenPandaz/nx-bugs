import React from 'react';
import { render } from '@testing-library/react';

import Lib6 from './lib6';

describe(' Lib6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib6 />);
    expect(baseElement).toBeTruthy();
  });
});
