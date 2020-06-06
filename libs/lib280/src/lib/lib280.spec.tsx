import React from 'react';
import { render } from '@testing-library/react';

import Lib280 from './lib280';

describe(' Lib280', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib280 />);
    expect(baseElement).toBeTruthy();
  });
});
