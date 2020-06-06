import React from 'react';
import { render } from '@testing-library/react';

import Lib485 from './lib485';

describe(' Lib485', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib485 />);
    expect(baseElement).toBeTruthy();
  });
});
