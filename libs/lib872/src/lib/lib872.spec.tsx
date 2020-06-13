import React from 'react';
import { render } from '@testing-library/react';

import Lib872 from './lib872';

describe(' Lib872', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib872 />);
    expect(baseElement).toBeTruthy();
  });
});
