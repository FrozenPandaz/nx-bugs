import React from 'react';
import { render } from '@testing-library/react';

import Lib41 from './lib41';

describe(' Lib41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib41 />);
    expect(baseElement).toBeTruthy();
  });
});
