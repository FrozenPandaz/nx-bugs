import React from 'react';
import { render } from '@testing-library/react';

import Lib861 from './lib861';

describe(' Lib861', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib861 />);
    expect(baseElement).toBeTruthy();
  });
});
