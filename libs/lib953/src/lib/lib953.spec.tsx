import React from 'react';
import { render } from '@testing-library/react';

import Lib953 from './lib953';

describe(' Lib953', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib953 />);
    expect(baseElement).toBeTruthy();
  });
});
