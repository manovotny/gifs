module.exports = {
    extends: 'get-off-my-lawn',
    ignorePatterns: ['main', 'render/.next'],
    rules: {
        '@typescript-eslint/no-unnecessary-condition': 0,
        '@typescript-eslint/no-unsafe-call': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/unbound-method': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'node/no-unpublished-import': 0,
    },
};
