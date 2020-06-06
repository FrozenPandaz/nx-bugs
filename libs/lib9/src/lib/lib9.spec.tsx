import React from 'react';
import { render } from '@testing-library/react';

import Lib9 from './lib9';

describe(' Lib9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib9 />);
    expect(baseElement).toBeTruthy();
  });
});
