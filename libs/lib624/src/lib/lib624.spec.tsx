import React from 'react';
import { render } from '@testing-library/react';

import Lib624 from './lib624';

describe(' Lib624', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib624 />);
    expect(baseElement).toBeTruthy();
  });
});
