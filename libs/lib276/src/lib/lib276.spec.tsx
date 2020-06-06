import React from 'react';
import { render } from '@testing-library/react';

import Lib276 from './lib276';

describe(' Lib276', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib276 />);
    expect(baseElement).toBeTruthy();
  });
});
