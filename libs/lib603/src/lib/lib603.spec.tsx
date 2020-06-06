import React from 'react';
import { render } from '@testing-library/react';

import Lib603 from './lib603';

describe(' Lib603', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib603 />);
    expect(baseElement).toBeTruthy();
  });
});
