import React from 'react';
import { render } from '@testing-library/react';

import Lib232 from './lib232';

describe(' Lib232', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib232 />);
    expect(baseElement).toBeTruthy();
  });
});
