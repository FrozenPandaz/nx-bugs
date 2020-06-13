import React from 'react';
import { render } from '@testing-library/react';

import Lib992 from './lib992';

describe(' Lib992', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib992 />);
    expect(baseElement).toBeTruthy();
  });
});
