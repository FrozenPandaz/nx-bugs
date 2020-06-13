import React from 'react';
import { render } from '@testing-library/react';

import Lib975 from './lib975';

describe(' Lib975', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib975 />);
    expect(baseElement).toBeTruthy();
  });
});
