import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './apps/api/src/schema.gql',
  documents: ['modules/**/*.graphql'],
  generates: {
    './gql/': {
      preset: 'client',
      config: {
        scalars: {
          DateTime: 'string',
          JSON: 'Record<string, unknown>',
        },
      },
    },
  },
};

export default config;
