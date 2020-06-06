import React from 'react';
import { render } from '@testing-library/react';

import Lib725 from './lib725';

describe(' Lib725', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib725 />);
    expect(baseElement).toBeTruthy();
  });
});
