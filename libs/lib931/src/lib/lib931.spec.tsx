import React from 'react';
import { render } from '@testing-library/react';

import Lib931 from './lib931';

describe(' Lib931', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib931 />);
    expect(baseElement).toBeTruthy();
  });
});
