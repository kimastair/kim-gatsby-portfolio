module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "plugin:react/recommended",
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "ignorePatterns": ["node_modules", "bower_components", ".cache", "public"],
  "plugins": [
    "react",
    "jsx-a11y"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  rules: {
    // My rules
    "react/function-component-definition": [
      "error",
      {
        "namedComponents": "arrow-function"
      }
    ],
    "react/no-unescaped-entities": "off",
    // Gatsby rules
    // Below comment copied from Gatsby eslintrc.js: 
    // New versions of react use a special jsx runtime that remove the requirement
    // for having react in scope for jsx. Once the jsx runtime is backported to all
    // versions of react we can make this always be `off`.
    // I would also assume that eslint-config-react-app will switch their flag to `off`
    // when jsx runtime is stable in all common versions of React.
    "react/jsx-uses-react": `error`,
    "react/react-in-jsx-scope": `error`,
    "import/no-webpack-loader-syntax": [0],
    "react/jsx-pascal-case": [
      `warn`,
      {
        allowNamespace: true,
      },
    ],
    "jsx-a11y/alt-text": `warn`,
    "jsx-a11y/anchor-has-content": `warn`,
    "jsx-a11y/anchor-is-valid": `warn`,
    "jsx-a11y/aria-activedescendant-has-tabindex": `warn`,
    "jsx-a11y/aria-props": `warn`,
    "jsx-a11y/aria-proptypes": `warn`,
    "jsx-a11y/aria-role": `warn`,
    "jsx-a11y/aria-unsupported-elements": `warn`,
    "jsx-a11y/autocomplete-valid": [
      `warn`,
      {
        inputComponents: [],
      },
    ],
    "jsx-a11y/click-events-have-key-events": `warn`,
    "jsx-a11y/control-has-associated-label": [
      `warn`,
      {
        ignoreElements: [
          `audio`,
          `canvas`,
          `embed`,
          `input`,
          `textarea`,
          `tr`,
          `video`,
        ],
        ignoreRoles: [
          `grid`,
          `listbox`,
          `menu`,
          `menubar`,
          `radiogroup`,
          `row`,
          `tablist`,
          `toolbar`,
          `tree`,
          `treegrid`,
        ],
        includeRoles: [`alert`, `dialog`],
      },
    ],
    "jsx-a11y/heading-has-content": `warn`,
    "jsx-a11y/html-has-lang": `warn`,
    "jsx-a11y/iframe-has-title": `warn`,
    "jsx-a11y/img-redundant-alt": `warn`,
    "jsx-a11y/interactive-supports-focus": [
      `warn`,
      {
        tabbable: [
          `button`,
          `checkbox`,
          `link`,
          `progressbar`,
          `searchbox`,
          `slider`,
          `spinbutton`,
          `switch`,
          `textbox`,
        ],
      },
    ],
    "jsx-a11y/label-has-associated-control": `warn`,
    "jsx-a11y/lang": `warn`,
    "jsx-a11y/media-has-caption": `warn`,
    "jsx-a11y/mouse-events-have-key-events": `warn`,
    "jsx-a11y/no-access-key": `warn`,
    "jsx-a11y/no-autofocus": `warn`,
    "jsx-a11y/no-distracting-elements": `warn`,
    "jsx-a11y/no-interactive-element-to-noninteractive-role": `warn`,
    "jsx-a11y/no-noninteractive-element-interactions": [
      `warn`,
      {
        body: [`onError`, `onLoad`],
        iframe: [`onError`, `onLoad`],
        img: [`onError`, `onLoad`],
      },
    ],
    "jsx-a11y/no-noninteractive-element-to-interactive-role": `warn`,
    "jsx-a11y/no-noninteractive-tabindex": `warn`,
    "jsx-a11y/no-redundant-roles": `warn`,
    "jsx-a11y/no-static-element-interactions": `warn`,
    "jsx-a11y/role-has-required-aria-props": `warn`,
    "jsx-a11y/role-supports-aria-props": `warn`,
    "jsx-a11y/scope": `warn`,
    "jsx-a11y/tabindex-no-positive": `warn`,
  },
};
