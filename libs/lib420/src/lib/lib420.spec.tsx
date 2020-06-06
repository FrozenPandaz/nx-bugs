import React from 'react';
import { render } from '@testing-library/react';

import Lib420 from './lib420';

describe(' Lib420', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib420 />);
    expect(baseElement).toBeTruthy();
  });
});
