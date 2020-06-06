import React from 'react';
import { render } from '@testing-library/react';

import Lib974 from './lib974';

describe(' Lib974', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib974 />);
    expect(baseElement).toBeTruthy();
  });
});
