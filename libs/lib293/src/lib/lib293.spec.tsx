import React from 'react';
import { render } from '@testing-library/react';

import Lib293 from './lib293';

describe(' Lib293', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib293 />);
    expect(baseElement).toBeTruthy();
  });
});
