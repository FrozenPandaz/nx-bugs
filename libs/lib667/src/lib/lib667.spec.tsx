import React from 'react';
import { render } from '@testing-library/react';

import Lib667 from './lib667';

describe(' Lib667', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib667 />);
    expect(baseElement).toBeTruthy();
  });
});
