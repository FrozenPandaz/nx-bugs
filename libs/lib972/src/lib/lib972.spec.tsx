import React from 'react';
import { render } from '@testing-library/react';

import Lib972 from './lib972';

describe(' Lib972', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib972 />);
    expect(baseElement).toBeTruthy();
  });
});
