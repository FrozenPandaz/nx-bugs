import React from 'react';
import { render } from '@testing-library/react';

import Lib336 from './lib336';

describe(' Lib336', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib336 />);
    expect(baseElement).toBeTruthy();
  });
});
