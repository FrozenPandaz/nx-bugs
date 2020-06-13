import React from 'react';
import { render } from '@testing-library/react';

import Lib536 from './lib536';

describe(' Lib536', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib536 />);
    expect(baseElement).toBeTruthy();
  });
});
