import React from 'react';
import { render } from '@testing-library/react';

import Lib835 from './lib835';

describe(' Lib835', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib835 />);
    expect(baseElement).toBeTruthy();
  });
});
