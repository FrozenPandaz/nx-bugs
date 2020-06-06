import React from 'react';
import { render } from '@testing-library/react';

import Lib990 from './lib990';

describe(' Lib990', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib990 />);
    expect(baseElement).toBeTruthy();
  });
});
