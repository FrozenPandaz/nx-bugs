import React from 'react';
import { render } from '@testing-library/react';

import Lib904 from './lib904';

describe(' Lib904', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib904 />);
    expect(baseElement).toBeTruthy();
  });
});
