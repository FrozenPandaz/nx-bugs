import React from 'react';
import { render } from '@testing-library/react';

import Lib25 from './lib25';

describe(' Lib25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib25 />);
    expect(baseElement).toBeTruthy();
  });
});
