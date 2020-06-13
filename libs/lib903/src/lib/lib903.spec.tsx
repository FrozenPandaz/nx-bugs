import React from 'react';
import { render } from '@testing-library/react';

import Lib903 from './lib903';

describe(' Lib903', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib903 />);
    expect(baseElement).toBeTruthy();
  });
});
