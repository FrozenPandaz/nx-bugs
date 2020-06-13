import React from 'react';
import { render } from '@testing-library/react';

import Lib360 from './lib360';

describe(' Lib360', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib360 />);
    expect(baseElement).toBeTruthy();
  });
});
