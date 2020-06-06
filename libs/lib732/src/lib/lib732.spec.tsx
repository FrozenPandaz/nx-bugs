import React from 'react';
import { render } from '@testing-library/react';

import Lib732 from './lib732';

describe(' Lib732', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib732 />);
    expect(baseElement).toBeTruthy();
  });
});
