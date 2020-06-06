import React from 'react';
import { render } from '@testing-library/react';

import Lib808 from './lib808';

describe(' Lib808', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib808 />);
    expect(baseElement).toBeTruthy();
  });
});
