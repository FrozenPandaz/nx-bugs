import React from 'react';
import { render } from '@testing-library/react';

import Lib986 from './lib986';

describe(' Lib986', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib986 />);
    expect(baseElement).toBeTruthy();
  });
});
