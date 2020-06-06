import React from 'react';
import { render } from '@testing-library/react';

import Lib422 from './lib422';

describe(' Lib422', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib422 />);
    expect(baseElement).toBeTruthy();
  });
});
