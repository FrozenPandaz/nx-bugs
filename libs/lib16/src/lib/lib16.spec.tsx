import React from 'react';
import { render } from '@testing-library/react';

import Lib16 from './lib16';

describe(' Lib16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib16 />);
    expect(baseElement).toBeTruthy();
  });
});
