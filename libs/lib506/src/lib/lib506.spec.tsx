import React from 'react';
import { render } from '@testing-library/react';

import Lib506 from './lib506';

describe(' Lib506', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib506 />);
    expect(baseElement).toBeTruthy();
  });
});
