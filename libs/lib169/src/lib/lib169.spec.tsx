import React from 'react';
import { render } from '@testing-library/react';

import Lib169 from './lib169';

describe(' Lib169', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib169 />);
    expect(baseElement).toBeTruthy();
  });
});
