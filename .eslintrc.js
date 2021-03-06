module.exports = {
    extends: "airbnb-base",
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: "module"
    },
    rules: {
        semi: ["error", "never"],
        "comma-dangle": ["error", "only-multiline"],
        indent: [
            "error",
            4,
            {
                SwitchCase: 1
            }
        ],
        "max-len": ["warn", 120],
        "global-require": "off",
        "no-shadow": "off",
        "no-param-reassign": "off",
        "prefer-destructuring": "off",
        "no-use-before-define": [
            "error",
            {
                functions: false
            }
        ],
        "no-underscore-dangle": "off",
        "import/no-extraneous-dependencies": "off",
        "import/prefer-default-export": "off"
    }
};
