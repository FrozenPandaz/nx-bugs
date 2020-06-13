import React from 'react';
import { render } from '@testing-library/react';

import Lib852 from './lib852';

describe(' Lib852', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib852 />);
    expect(baseElement).toBeTruthy();
  });
});
