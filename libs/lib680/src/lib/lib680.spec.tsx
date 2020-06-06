import React from 'react';
import { render } from '@testing-library/react';

import Lib680 from './lib680';

describe(' Lib680', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib680 />);
    expect(baseElement).toBeTruthy();
  });
});
