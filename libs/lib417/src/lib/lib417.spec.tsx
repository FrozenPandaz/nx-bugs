import React from 'react';
import { render } from '@testing-library/react';

import Lib417 from './lib417';

describe(' Lib417', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib417 />);
    expect(baseElement).toBeTruthy();
  });
});
