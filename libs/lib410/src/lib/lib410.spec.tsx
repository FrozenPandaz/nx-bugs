import React from 'react';
import { render } from '@testing-library/react';

import Lib410 from './lib410';

describe(' Lib410', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib410 />);
    expect(baseElement).toBeTruthy();
  });
});
