import React from 'react';
import { render } from '@testing-library/react';

import Lib769 from './lib769';

describe(' Lib769', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib769 />);
    expect(baseElement).toBeTruthy();
  });
});
