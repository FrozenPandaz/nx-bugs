import React from 'react';
import { render } from '@testing-library/react';

import Lib323 from './lib323';

describe(' Lib323', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib323 />);
    expect(baseElement).toBeTruthy();
  });
});
