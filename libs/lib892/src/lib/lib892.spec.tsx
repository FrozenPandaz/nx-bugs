import React from 'react';
import { render } from '@testing-library/react';

import Lib892 from './lib892';

describe(' Lib892', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib892 />);
    expect(baseElement).toBeTruthy();
  });
});
