const fixedInNextVersionOfGOML = {
    '@typescript-eslint/no-misused-promises': 0,
    'jsx-a11y/anchor-is-valid': 0,
};

module.exports = {
    extends: 'get-off-my-lawn',
    ignorePatterns: ['dist', 'main', 'renderer/.next', 'renderer/out'],
    rules: {
        ...fixedInNextVersionOfGOML,
        '@typescript-eslint/no-unnecessary-condition': 0,
        '@typescript-eslint/no-unsafe-call': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/unbound-method': 0,
    },
};
