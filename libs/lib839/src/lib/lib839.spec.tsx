import React from 'react';
import { render } from '@testing-library/react';

import Lib839 from './lib839';

describe(' Lib839', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib839 />);
    expect(baseElement).toBeTruthy();
  });
});
