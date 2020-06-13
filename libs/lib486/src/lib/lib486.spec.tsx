import React from 'react';
import { render } from '@testing-library/react';

import Lib486 from './lib486';

describe(' Lib486', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib486 />);
    expect(baseElement).toBeTruthy();
  });
});
