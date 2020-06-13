import React from 'react';
import { render } from '@testing-library/react';

import Lib490 from './lib490';

describe(' Lib490', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib490 />);
    expect(baseElement).toBeTruthy();
  });
});
