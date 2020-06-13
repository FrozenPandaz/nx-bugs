import React from 'react';
import { render } from '@testing-library/react';

import Lib889 from './lib889';

describe(' Lib889', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib889 />);
    expect(baseElement).toBeTruthy();
  });
});
