import React from 'react';
import { render } from '@testing-library/react';

import Lib761 from './lib761';

describe(' Lib761', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib761 />);
    expect(baseElement).toBeTruthy();
  });
});
