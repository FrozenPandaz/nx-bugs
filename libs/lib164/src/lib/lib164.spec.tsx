import React from 'react';
import { render } from '@testing-library/react';

import Lib164 from './lib164';

describe(' Lib164', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib164 />);
    expect(baseElement).toBeTruthy();
  });
});
