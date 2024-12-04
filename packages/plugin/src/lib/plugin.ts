import { workspaceRoot } from '@nx/devkit';

export const createNodesV2 = [
  '**/README.md',
  async () => {
    const a = workspaceRoot;
    noop(a);

    // await new Promise(res => {
    //   setTimeout(res, 10000);
    // });
    return [];
  }
];

function noop(a: string) {}