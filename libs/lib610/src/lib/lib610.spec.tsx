import React from 'react';
import { render } from '@testing-library/react';

import Lib610 from './lib610';

describe(' Lib610', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib610 />);
    expect(baseElement).toBeTruthy();
  });
});
