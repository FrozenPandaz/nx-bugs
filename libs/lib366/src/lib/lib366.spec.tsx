import React from 'react';
import { render } from '@testing-library/react';

import Lib366 from './lib366';

describe(' Lib366', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib366 />);
    expect(baseElement).toBeTruthy();
  });
});
