import React from 'react';
import { render } from '@testing-library/react';

import Lib530 from './lib530';

describe(' Lib530', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib530 />);
    expect(baseElement).toBeTruthy();
  });
});
