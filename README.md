# 초기 설치

yarn create next-app --typescript

```
make-money
```

```
yarn eslint .
```

# vs code eslint plugin 설치

# settings.json

```
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

# eslintrc.json에 아래 내용 추가

```
// .eslintrc.json
{
  "extends": "next/core-web-vitals",
  "rules": {
    "prefer-const": "error"
  }
}
```

# eslint plugin 설치

```
yarn add --dev @typescript-eslint/eslint-plugin
```

# eslint.json에 아래 내용 추가

```
{
  "plugins": ["@typescript-eslint"],
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    // I suggest you add those two rules:
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error"
  }
}
```

# prettier 설정

```
yarn add --dev prettier eslint-config-prettier
```

# .prettierrc.json파일 생성

```
{
  "semi": false,
  "trailingComma": "es5",
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false
}
```

# settins.json에 아래 내용 추가

```
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode"
```

# 참고 사이트

https://paulintrognon.fr/blog/typescript-prettier-eslint-next-js

# tailwindcss 설치

(https://tailwindcss.com/docs/guides/nextjs)

# daisyUI 설치

(https://daisyui.com/docs/install/)

```
npm i daisyui
```

tailwind.config.js에 아래 내용 추가

```
plugins: [require("daisyui")],
```
