import React from 'react';
import { render } from '@testing-library/react';

import Lib753 from './lib753';

describe(' Lib753', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib753 />);
    expect(baseElement).toBeTruthy();
  });
});
