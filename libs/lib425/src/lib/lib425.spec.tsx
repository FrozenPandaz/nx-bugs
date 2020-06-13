import React from 'react';
import { render } from '@testing-library/react';

import Lib425 from './lib425';

describe(' Lib425', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib425 />);
    expect(baseElement).toBeTruthy();
  });
});
