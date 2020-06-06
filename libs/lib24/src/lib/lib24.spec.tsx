import React from 'react';
import { render } from '@testing-library/react';

import Lib24 from './lib24';

describe(' Lib24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib24 />);
    expect(baseElement).toBeTruthy();
  });
});
