import React from 'react';
import { render } from '@testing-library/react';

import Lib538 from './lib538';

describe(' Lib538', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib538 />);
    expect(baseElement).toBeTruthy();
  });
});
