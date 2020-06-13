import React from 'react';
import { render } from '@testing-library/react';

import Lib114 from './lib114';

describe(' Lib114', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib114 />);
    expect(baseElement).toBeTruthy();
  });
});
