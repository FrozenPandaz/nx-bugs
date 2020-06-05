import { chain, Rule, externalSchematic, Tree } from '@angular-devkit/schematics';
import { updateJsonInTree } from '@nrwl/workspace';

function addImport(i: number) {
  return (tree: Tree) => {
    tree.overwrite(`apps/app1/src/app/app.tsx`, `import * from '@tsconfig-test/lib${i}';` + tree.read(`apps/app1/src/app/app.tsx`).toString())

    tree.overwrite(`apps/app2/src/app/app.tsx`, `import * from '@tsconfig-test/lib${i}';` + tree.read(`apps/app2/src/app/app.tsx`).toString())
  }
}

function deleteTsconfig(i: number) {
  return (tree: Tree) => {
    tree.delete(`libs/lib${i}/tsconfig.json`);
  }
}

function updateLib(i: number) {
  return chain([
    updateJsonInTree(`tsconfig.json`, (json) => {
      json.references = json.references || [];
      json.references.push({
        path: `./libs/lib${i}/tsconfig.lib.json`
      });
      json.references.push({
        path: `./libs/lib${i}/tsconfig.spec.json`
      });
      return json;
    }),
    updateJsonInTree(`libs/lib${i}/tsconfig.lib.json`, json => {
      json.extends = '../../tsconfig.json';

        return json;
    }),
    updateJsonInTree(`libs/lib${i}/tsconfig.spec.json`, json => {
      json.extends = '../../tsconfig.json';

      return json;
    })
  ]);
}

function updateLib2(i: number) {
  return updateJsonInTree(`libs/lib${i}/tsconfig.json`, (json) => {
    json.references = json.references || [];
    json.references.push({
      path: `./tsconfig.lib.json`
    });
    json.references.push({
      path: `./tsconfig.spec.json`
    });
    return json;
  })
}


export default function (schema): Rule {
  const rules: Rule[] = [];

  let start = schema.start;
  for (let i = start; i < (start + 500); i++) {
    rules.push(externalSchematic('@nrwl/react', 'lib', {
      name: 'lib' + i,
      style: 'css',
      linter: 'eslint',
      skipFormat: true,
      skipInstall: true,
    }));
    rules.push(updateLib(i))
    rules.push(deleteTsconfig(i))

    // rules.push(updateLib2(i))

    rules.push(addImport(i))
  }

  return chain(rules);
}
