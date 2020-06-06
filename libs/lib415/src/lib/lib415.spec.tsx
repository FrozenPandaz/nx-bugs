import React from 'react';
import { render } from '@testing-library/react';

import Lib415 from './lib415';

describe(' Lib415', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib415 />);
    expect(baseElement).toBeTruthy();
  });
});
