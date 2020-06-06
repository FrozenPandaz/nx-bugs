import React from 'react';
import { render } from '@testing-library/react';

import Lib787 from './lib787';

describe(' Lib787', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib787 />);
    expect(baseElement).toBeTruthy();
  });
});
