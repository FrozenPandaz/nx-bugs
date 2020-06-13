import React from 'react';
import { render } from '@testing-library/react';

import Lib578 from './lib578';

describe(' Lib578', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib578 />);
    expect(baseElement).toBeTruthy();
  });
});
