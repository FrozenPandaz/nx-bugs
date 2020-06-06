import React from 'react';
import { render } from '@testing-library/react';

import Lib424 from './lib424';

describe(' Lib424', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib424 />);
    expect(baseElement).toBeTruthy();
  });
});
