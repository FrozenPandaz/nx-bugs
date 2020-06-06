import React from 'react';
import { render } from '@testing-library/react';

import Lib844 from './lib844';

describe(' Lib844', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib844 />);
    expect(baseElement).toBeTruthy();
  });
});
