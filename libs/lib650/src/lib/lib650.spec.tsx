import React from 'react';
import { render } from '@testing-library/react';

import Lib650 from './lib650';

describe(' Lib650', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib650 />);
    expect(baseElement).toBeTruthy();
  });
});
