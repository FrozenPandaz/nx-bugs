import React from 'react';
import { render } from '@testing-library/react';

import Lib920 from './lib920';

describe(' Lib920', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib920 />);
    expect(baseElement).toBeTruthy();
  });
});
