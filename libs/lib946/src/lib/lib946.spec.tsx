import React from 'react';
import { render } from '@testing-library/react';

import Lib946 from './lib946';

describe(' Lib946', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib946 />);
    expect(baseElement).toBeTruthy();
  });
});
