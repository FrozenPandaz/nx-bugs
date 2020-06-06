import React from 'react';
import { render } from '@testing-library/react';

import Lib924 from './lib924';

describe(' Lib924', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib924 />);
    expect(baseElement).toBeTruthy();
  });
});
