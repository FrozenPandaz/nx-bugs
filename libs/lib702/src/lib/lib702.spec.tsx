import React from 'react';
import { render } from '@testing-library/react';

import Lib702 from './lib702';

describe(' Lib702', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib702 />);
    expect(baseElement).toBeTruthy();
  });
});
