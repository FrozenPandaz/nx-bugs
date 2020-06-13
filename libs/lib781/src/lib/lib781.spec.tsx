import React from 'react';
import { render } from '@testing-library/react';

import Lib781 from './lib781';

describe(' Lib781', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib781 />);
    expect(baseElement).toBeTruthy();
  });
});
