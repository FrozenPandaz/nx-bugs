import React from 'react';
import { render } from '@testing-library/react';

import Lib161 from './lib161';

describe(' Lib161', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib161 />);
    expect(baseElement).toBeTruthy();
  });
});
