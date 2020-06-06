import React from 'react';
import { render } from '@testing-library/react';

import Lib200 from './lib200';

describe(' Lib200', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib200 />);
    expect(baseElement).toBeTruthy();
  });
});
