import React from 'react';
import { render } from '@testing-library/react';

import Lib832 from './lib832';

describe(' Lib832', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib832 />);
    expect(baseElement).toBeTruthy();
  });
});
