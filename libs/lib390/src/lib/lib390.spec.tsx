import React from 'react';
import { render } from '@testing-library/react';

import Lib390 from './lib390';

describe(' Lib390', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib390 />);
    expect(baseElement).toBeTruthy();
  });
});
