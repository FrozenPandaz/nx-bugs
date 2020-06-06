import React from 'react';
import { render } from '@testing-library/react';

import Lib631 from './lib631';

describe(' Lib631', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib631 />);
    expect(baseElement).toBeTruthy();
  });
});
