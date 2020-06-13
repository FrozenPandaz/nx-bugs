import React from 'react';
import { render } from '@testing-library/react';

import Lib468 from './lib468';

describe(' Lib468', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib468 />);
    expect(baseElement).toBeTruthy();
  });
});
