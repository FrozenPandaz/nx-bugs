import React from 'react';
import { render } from '@testing-library/react';

import Lib658 from './lib658';

describe(' Lib658', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib658 />);
    expect(baseElement).toBeTruthy();
  });
});
