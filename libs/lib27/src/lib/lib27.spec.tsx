import React from 'react';
import { render } from '@testing-library/react';

import Lib27 from './lib27';

describe(' Lib27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib27 />);
    expect(baseElement).toBeTruthy();
  });
});
