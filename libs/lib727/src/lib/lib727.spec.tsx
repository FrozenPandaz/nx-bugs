import React from 'react';
import { render } from '@testing-library/react';

import Lib727 from './lib727';

describe(' Lib727', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib727 />);
    expect(baseElement).toBeTruthy();
  });
});
