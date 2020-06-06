import React from 'react';
import { render } from '@testing-library/react';

import Lib514 from './lib514';

describe(' Lib514', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib514 />);
    expect(baseElement).toBeTruthy();
  });
});
