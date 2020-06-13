import React from 'react';
import { render } from '@testing-library/react';

import Lib127 from './lib127';

describe(' Lib127', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib127 />);
    expect(baseElement).toBeTruthy();
  });
});
