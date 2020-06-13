import React from 'react';
import { render } from '@testing-library/react';

import Lib615 from './lib615';

describe(' Lib615', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib615 />);
    expect(baseElement).toBeTruthy();
  });
});
