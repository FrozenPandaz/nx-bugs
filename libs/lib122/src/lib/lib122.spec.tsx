import React from 'react';
import { render } from '@testing-library/react';

import Lib122 from './lib122';

describe(' Lib122', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib122 />);
    expect(baseElement).toBeTruthy();
  });
});
