import React from 'react';
import { render } from '@testing-library/react';

import Lib220 from './lib220';

describe(' Lib220', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib220 />);
    expect(baseElement).toBeTruthy();
  });
});
