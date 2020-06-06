import React from 'react';
import { render } from '@testing-library/react';

import Lib652 from './lib652';

describe(' Lib652', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib652 />);
    expect(baseElement).toBeTruthy();
  });
});
