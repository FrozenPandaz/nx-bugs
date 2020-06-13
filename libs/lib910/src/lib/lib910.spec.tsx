import React from 'react';
import { render } from '@testing-library/react';

import Lib910 from './lib910';

describe(' Lib910', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib910 />);
    expect(baseElement).toBeTruthy();
  });
});
