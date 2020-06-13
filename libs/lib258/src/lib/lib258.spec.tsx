import React from 'react';
import { render } from '@testing-library/react';

import Lib258 from './lib258';

describe(' Lib258', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib258 />);
    expect(baseElement).toBeTruthy();
  });
});
