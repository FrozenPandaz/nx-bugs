import React from 'react';
import { render } from '@testing-library/react';

import Lib414 from './lib414';

describe(' Lib414', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib414 />);
    expect(baseElement).toBeTruthy();
  });
});
