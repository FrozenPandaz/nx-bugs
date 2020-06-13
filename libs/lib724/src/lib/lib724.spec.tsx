import React from 'react';
import { render } from '@testing-library/react';

import Lib724 from './lib724';

describe(' Lib724', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib724 />);
    expect(baseElement).toBeTruthy();
  });
});
