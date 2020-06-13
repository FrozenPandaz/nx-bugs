import React from 'react';
import { render } from '@testing-library/react';

import Lib991 from './lib991';

describe(' Lib991', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib991 />);
    expect(baseElement).toBeTruthy();
  });
});
