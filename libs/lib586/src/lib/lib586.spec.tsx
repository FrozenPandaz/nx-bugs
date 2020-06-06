import React from 'react';
import { render } from '@testing-library/react';

import Lib586 from './lib586';

describe(' Lib586', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib586 />);
    expect(baseElement).toBeTruthy();
  });
});
