import React from 'react';
import { render } from '@testing-library/react';

import Lib236 from './lib236';

describe(' Lib236', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib236 />);
    expect(baseElement).toBeTruthy();
  });
});
