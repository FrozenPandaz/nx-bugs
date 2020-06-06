import React from 'react';
import { render } from '@testing-library/react';

import Lib84 from './lib84';

describe(' Lib84', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib84 />);
    expect(baseElement).toBeTruthy();
  });
});
