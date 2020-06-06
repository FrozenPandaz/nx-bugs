import React from 'react';
import { render } from '@testing-library/react';

import Lib36 from './lib36';

describe(' Lib36', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib36 />);
    expect(baseElement).toBeTruthy();
  });
});
