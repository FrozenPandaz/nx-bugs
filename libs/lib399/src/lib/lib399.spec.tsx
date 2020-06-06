import React from 'react';
import { render } from '@testing-library/react';

import Lib399 from './lib399';

describe(' Lib399', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib399 />);
    expect(baseElement).toBeTruthy();
  });
});
