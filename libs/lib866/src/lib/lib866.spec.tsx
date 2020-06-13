import React from 'react';
import { render } from '@testing-library/react';

import Lib866 from './lib866';

describe(' Lib866', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib866 />);
    expect(baseElement).toBeTruthy();
  });
});
