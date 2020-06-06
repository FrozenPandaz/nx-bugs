import React from 'react';
import { render } from '@testing-library/react';

import Lib850 from './lib850';

describe(' Lib850', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib850 />);
    expect(baseElement).toBeTruthy();
  });
});
