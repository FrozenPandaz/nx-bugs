import React from 'react';
import { render } from '@testing-library/react';

import Lib339 from './lib339';

describe(' Lib339', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib339 />);
    expect(baseElement).toBeTruthy();
  });
});
