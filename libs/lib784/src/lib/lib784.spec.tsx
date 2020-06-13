import React from 'react';
import { render } from '@testing-library/react';

import Lib784 from './lib784';

describe(' Lib784', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib784 />);
    expect(baseElement).toBeTruthy();
  });
});
