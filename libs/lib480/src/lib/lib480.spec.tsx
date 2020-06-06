import React from 'react';
import { render } from '@testing-library/react';

import Lib480 from './lib480';

describe(' Lib480', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib480 />);
    expect(baseElement).toBeTruthy();
  });
});
