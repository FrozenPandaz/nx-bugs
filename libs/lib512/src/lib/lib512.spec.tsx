import React from 'react';
import { render } from '@testing-library/react';

import Lib512 from './lib512';

describe(' Lib512', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib512 />);
    expect(baseElement).toBeTruthy();
  });
});
