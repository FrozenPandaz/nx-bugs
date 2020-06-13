import React from 'react';
import { render } from '@testing-library/react';

import Lib526 from './lib526';

describe(' Lib526', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib526 />);
    expect(baseElement).toBeTruthy();
  });
});
