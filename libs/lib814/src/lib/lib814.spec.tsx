import React from 'react';
import { render } from '@testing-library/react';

import Lib814 from './lib814';

describe(' Lib814', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib814 />);
    expect(baseElement).toBeTruthy();
  });
});
