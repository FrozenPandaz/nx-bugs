import React from 'react';
import { render } from '@testing-library/react';

import Lib249 from './lib249';

describe(' Lib249', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib249 />);
    expect(baseElement).toBeTruthy();
  });
});
