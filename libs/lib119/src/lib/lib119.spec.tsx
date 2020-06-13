import React from 'react';
import { render } from '@testing-library/react';

import Lib119 from './lib119';

describe(' Lib119', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib119 />);
    expect(baseElement).toBeTruthy();
  });
});
