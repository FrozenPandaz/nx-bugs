import React from 'react';
import { render } from '@testing-library/react';

import Lib823 from './lib823';

describe(' Lib823', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib823 />);
    expect(baseElement).toBeTruthy();
  });
});
