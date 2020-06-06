import React from 'react';
import { render } from '@testing-library/react';

import Lib478 from './lib478';

describe(' Lib478', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib478 />);
    expect(baseElement).toBeTruthy();
  });
});
