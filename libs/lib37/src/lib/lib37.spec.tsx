import React from 'react';
import { render } from '@testing-library/react';

import Lib37 from './lib37';

describe(' Lib37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib37 />);
    expect(baseElement).toBeTruthy();
  });
});
