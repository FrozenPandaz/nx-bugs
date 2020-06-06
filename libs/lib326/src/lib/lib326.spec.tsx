import React from 'react';
import { render } from '@testing-library/react';

import Lib326 from './lib326';

describe(' Lib326', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib326 />);
    expect(baseElement).toBeTruthy();
  });
});
