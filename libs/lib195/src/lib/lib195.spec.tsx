import React from 'react';
import { render } from '@testing-library/react';

import Lib195 from './lib195';

describe(' Lib195', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib195 />);
    expect(baseElement).toBeTruthy();
  });
});
