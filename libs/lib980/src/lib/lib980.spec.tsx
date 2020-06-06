import React from 'react';
import { render } from '@testing-library/react';

import Lib980 from './lib980';

describe(' Lib980', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib980 />);
    expect(baseElement).toBeTruthy();
  });
});
