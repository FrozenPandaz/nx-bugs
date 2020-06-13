import React from 'react';
import { render } from '@testing-library/react';

import Lib659 from './lib659';

describe(' Lib659', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib659 />);
    expect(baseElement).toBeTruthy();
  });
});
