import React from 'react';
import { render } from '@testing-library/react';

import Lib717 from './lib717';

describe(' Lib717', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib717 />);
    expect(baseElement).toBeTruthy();
  });
});
