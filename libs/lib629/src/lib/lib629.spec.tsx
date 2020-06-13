import React from 'react';
import { render } from '@testing-library/react';

import Lib629 from './lib629';

describe(' Lib629', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib629 />);
    expect(baseElement).toBeTruthy();
  });
});
