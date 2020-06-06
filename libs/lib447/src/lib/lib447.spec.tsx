import React from 'react';
import { render } from '@testing-library/react';

import Lib447 from './lib447';

describe(' Lib447', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib447 />);
    expect(baseElement).toBeTruthy();
  });
});
