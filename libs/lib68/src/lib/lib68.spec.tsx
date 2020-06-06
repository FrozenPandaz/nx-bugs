import React from 'react';
import { render } from '@testing-library/react';

import Lib68 from './lib68';

describe(' Lib68', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib68 />);
    expect(baseElement).toBeTruthy();
  });
});
