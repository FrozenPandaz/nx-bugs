import React from 'react';
import { render } from '@testing-library/react';

import Lib673 from './lib673';

describe(' Lib673', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib673 />);
    expect(baseElement).toBeTruthy();
  });
});
