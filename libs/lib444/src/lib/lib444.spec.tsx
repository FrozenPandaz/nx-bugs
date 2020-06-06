import React from 'react';
import { render } from '@testing-library/react';

import Lib444 from './lib444';

describe(' Lib444', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib444 />);
    expect(baseElement).toBeTruthy();
  });
});
