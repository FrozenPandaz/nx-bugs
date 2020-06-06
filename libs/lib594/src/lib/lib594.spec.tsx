import React from 'react';
import { render } from '@testing-library/react';

import Lib594 from './lib594';

describe(' Lib594', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib594 />);
    expect(baseElement).toBeTruthy();
  });
});
