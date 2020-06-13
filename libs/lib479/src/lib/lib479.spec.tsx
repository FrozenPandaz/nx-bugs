import React from 'react';
import { render } from '@testing-library/react';

import Lib479 from './lib479';

describe(' Lib479', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib479 />);
    expect(baseElement).toBeTruthy();
  });
});
