import React from 'react';
import { render } from '@testing-library/react';

import Lib653 from './lib653';

describe(' Lib653', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib653 />);
    expect(baseElement).toBeTruthy();
  });
});
