import React from 'react';
import { render } from '@testing-library/react';

import Lib759 from './lib759';

describe(' Lib759', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib759 />);
    expect(baseElement).toBeTruthy();
  });
});
