import React from 'react';
import { render } from '@testing-library/react';

import Lib896 from './lib896';

describe(' Lib896', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib896 />);
    expect(baseElement).toBeTruthy();
  });
});
