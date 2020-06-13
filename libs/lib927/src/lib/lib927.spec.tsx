import React from 'react';
import { render } from '@testing-library/react';

import Lib927 from './lib927';

describe(' Lib927', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib927 />);
    expect(baseElement).toBeTruthy();
  });
});
