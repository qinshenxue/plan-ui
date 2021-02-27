module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/essential', '@vue/airbnb'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'prefer-destructuring': 'off',
        'no-underscore-dangle': 'off',
        'linebreak-style': 'off',
        'no-param-reassign': 'off',
        'operator-linebreak': 'off',
        'max-len': 'off',
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'never',
            },
        ],
        'object-curly-newline': 'off',
        semi: ['error', 'never'],
        indent: ['error', 4],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                jest: true,
            },
        },
    ],
}
