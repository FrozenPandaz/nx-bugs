import React from 'react';
import { render } from '@testing-library/react';

import Lib688 from './lib688';

describe(' Lib688', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib688 />);
    expect(baseElement).toBeTruthy();
  });
});
