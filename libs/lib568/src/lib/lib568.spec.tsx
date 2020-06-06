import React from 'react';
import { render } from '@testing-library/react';

import Lib568 from './lib568';

describe(' Lib568', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib568 />);
    expect(baseElement).toBeTruthy();
  });
});
