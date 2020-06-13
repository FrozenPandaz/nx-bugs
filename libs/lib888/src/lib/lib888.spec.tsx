import React from 'react';
import { render } from '@testing-library/react';

import Lib888 from './lib888';

describe(' Lib888', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib888 />);
    expect(baseElement).toBeTruthy();
  });
});
