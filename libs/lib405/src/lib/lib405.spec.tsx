import React from 'react';
import { render } from '@testing-library/react';

import Lib405 from './lib405';

describe(' Lib405', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib405 />);
    expect(baseElement).toBeTruthy();
  });
});
