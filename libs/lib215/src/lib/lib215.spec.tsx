import React from 'react';
import { render } from '@testing-library/react';

import Lib215 from './lib215';

describe(' Lib215', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib215 />);
    expect(baseElement).toBeTruthy();
  });
});
