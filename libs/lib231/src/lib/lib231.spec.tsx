import React from 'react';
import { render } from '@testing-library/react';

import Lib231 from './lib231';

describe(' Lib231', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib231 />);
    expect(baseElement).toBeTruthy();
  });
});
