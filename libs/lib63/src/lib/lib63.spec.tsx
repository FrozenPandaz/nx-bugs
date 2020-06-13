import React from 'react';
import { render } from '@testing-library/react';

import Lib63 from './lib63';

describe(' Lib63', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib63 />);
    expect(baseElement).toBeTruthy();
  });
});
