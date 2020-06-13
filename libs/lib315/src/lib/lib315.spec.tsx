import React from 'react';
import { render } from '@testing-library/react';

import Lib315 from './lib315';

describe(' Lib315', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib315 />);
    expect(baseElement).toBeTruthy();
  });
});
