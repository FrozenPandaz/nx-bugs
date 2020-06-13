import React from 'react';
import { render } from '@testing-library/react';

import Lib923 from './lib923';

describe(' Lib923', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib923 />);
    expect(baseElement).toBeTruthy();
  });
});
