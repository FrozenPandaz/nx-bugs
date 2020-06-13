import React from 'react';
import { render } from '@testing-library/react';

import Lib875 from './lib875';

describe(' Lib875', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib875 />);
    expect(baseElement).toBeTruthy();
  });
});
