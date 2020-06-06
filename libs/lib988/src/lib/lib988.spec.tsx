import React from 'react';
import { render } from '@testing-library/react';

import Lib988 from './lib988';

describe(' Lib988', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib988 />);
    expect(baseElement).toBeTruthy();
  });
});
