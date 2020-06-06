import React from 'react';
import { render } from '@testing-library/react';

import Lib950 from './lib950';

describe(' Lib950', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib950 />);
    expect(baseElement).toBeTruthy();
  });
});
