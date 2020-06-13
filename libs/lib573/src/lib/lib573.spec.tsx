import React from 'react';
import { render } from '@testing-library/react';

import Lib573 from './lib573';

describe(' Lib573', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib573 />);
    expect(baseElement).toBeTruthy();
  });
});
