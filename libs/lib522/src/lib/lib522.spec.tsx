import React from 'react';
import { render } from '@testing-library/react';

import Lib522 from './lib522';

describe(' Lib522', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Lib522 />);
    expect(baseElement).toBeTruthy();
  });
});
