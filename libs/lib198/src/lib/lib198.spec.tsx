import React from 'react';
import { render } from '@testing-library/react';

import Lib198 from './lib198';

describe(' Lib198', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib198 />);
    expect(baseElement).toBeTruthy();
  });
});
