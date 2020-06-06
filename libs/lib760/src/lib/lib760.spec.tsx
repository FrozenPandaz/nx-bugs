import React from 'react';
import { render } from '@testing-library/react';

import Lib760 from './lib760';

describe(' Lib760', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib760 />);
    expect(baseElement).toBeTruthy();
  });
});
