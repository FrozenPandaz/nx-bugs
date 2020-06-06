import React from 'react';
import { render } from '@testing-library/react';

import Lib589 from './lib589';

describe(' Lib589', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib589 />);
    expect(baseElement).toBeTruthy();
  });
});
