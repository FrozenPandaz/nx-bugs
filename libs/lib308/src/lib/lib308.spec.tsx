import React from 'react';
import { render } from '@testing-library/react';

import Lib308 from './lib308';

describe(' Lib308', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib308 />);
    expect(baseElement).toBeTruthy();
  });
});
