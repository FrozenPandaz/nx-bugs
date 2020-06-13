import React from 'react';
import { render } from '@testing-library/react';

import Lib845 from './lib845';

describe(' Lib845', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib845 />);
    expect(baseElement).toBeTruthy();
  });
});
