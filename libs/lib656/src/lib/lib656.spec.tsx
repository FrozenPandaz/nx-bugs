import React from 'react';
import { render } from '@testing-library/react';

import Lib656 from './lib656';

describe(' Lib656', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib656 />);
    expect(baseElement).toBeTruthy();
  });
});
