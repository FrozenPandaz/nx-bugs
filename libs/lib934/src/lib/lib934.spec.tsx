import React from 'react';
import { render } from '@testing-library/react';

import Lib934 from './lib934';

describe(' Lib934', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib934 />);
    expect(baseElement).toBeTruthy();
  });
});
