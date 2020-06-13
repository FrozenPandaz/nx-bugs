import React from 'react';
import { render } from '@testing-library/react';

import Lib858 from './lib858';

describe(' Lib858', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib858 />);
    expect(baseElement).toBeTruthy();
  });
});
