import React from 'react';
import { render } from '@testing-library/react';

import Lib871 from './lib871';

describe(' Lib871', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib871 />);
    expect(baseElement).toBeTruthy();
  });
});
