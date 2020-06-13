import React from 'react';
import { render } from '@testing-library/react';

import Lib566 from './lib566';

describe(' Lib566', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib566 />);
    expect(baseElement).toBeTruthy();
  });
});
