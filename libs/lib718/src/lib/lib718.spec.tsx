import React from 'react';
import { render } from '@testing-library/react';

import Lib718 from './lib718';

describe(' Lib718', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib718 />);
    expect(baseElement).toBeTruthy();
  });
});
