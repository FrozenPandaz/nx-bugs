import React from 'react';
import { render } from '@testing-library/react';

import Lib488 from './lib488';

describe(' Lib488', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib488 />);
    expect(baseElement).toBeTruthy();
  });
});
