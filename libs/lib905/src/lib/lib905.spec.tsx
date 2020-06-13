import React from 'react';
import { render } from '@testing-library/react';

import Lib905 from './lib905';

describe(' Lib905', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib905 />);
    expect(baseElement).toBeTruthy();
  });
});
