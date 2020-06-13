import React from 'react';
import { render } from '@testing-library/react';

import Lib593 from './lib593';

describe(' Lib593', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib593 />);
    expect(baseElement).toBeTruthy();
  });
});
