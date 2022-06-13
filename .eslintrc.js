module.exports = {
  'parser': 'vue-eslint-parser',
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    // 'plugin:vue/essential',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module'
  },
  'plugins': [
    'vue',
    '@typescript-eslint'
  ],
  'rules': {
    // "off" 或 0 - 关闭规则
    // "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
    // "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/max-attributes-per-line': [1, {
      'singleline': 10,
      'multiline': 1
    }],
    'vue/singleline-html-element-content-newline': 0, // 在单行元素的内容前后需要换行符
    'vue/multiline-html-element-content-newline': 0, // 在多行元素的内容之前和之后需要换行符
    // 'vue/name-property-casing': [2, 'PascalCase'], // 属性名需要使用驼峰式命名法
    'vue/no-v-html': 0, // 允许使用v-html
    // js规范
    // 'indent': [ 'error', 2],
    'linebreak-style': [2, 'windows'],
    'quotes': [1, 'single'],
    'semi': [1, 'never'],
    'accessor-pairs': 2, // 在对象中强制使用getter/setter
    'arrow-spacing': [2, { // 在箭头函数之前/之后需要空格
      'before': true,
      'after': true
    }],
    // 'block-spacing': [2, 'always'],   // 在打开块之后和关闭块之前，禁止或强制执行块内部的空格
    'brace-style': [1, '1tbs', { 'allowSingleLine': true }], // 需要大括号样式
    'camelcase': [0, { // 需要驼峰命名
      'properties': 'always'
    }],
    'comma-spacing': [2, { // 强制逗号旁边的间距： 左右一个空格
      'before': false,
      'after': true
    }],
    // 'comma-dangle': [2, 'never'], // 要求或禁止使用尾随逗号；最后一个属性是不需要逗号
    // 'comma-style': [2, 'last'],       // 逗号风格
    // 'curly': [2, 'multi-line'],
    // 'dot-location': [1, 'property'],  // 在dot之前和之后强制换行
    // 'eol-last': 2,                    // 在文件末尾要求或禁止换行
    // 'indent': [2, 2, { // 强制执行一致的缩进
    //   'SwitchCase': 1
    // }],
    'eqeqeq': [0, 'always', { 'null': 'ignore' }], // 是否使用全等
    'handle-callback-err': [1, '^(err|error)$'], // 强制执行回调错误处理
    'jsx-quotes': [2, 'prefer-single'], // 强制在JSX文件中一致使用单引号
    'key-spacing': [2, { // 在对象属性中强制键和值之间的一致间距
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': [2, { // 关键字前后强制执行一致的间距
      'before': true,
      'after': true
    }],
    'new-cap': [2, { // 要求构造函数名称以大写字母开头
      'newIsCap': true,
      'capIsNew': false
    }],
    'new-parens': 2, // 调用不带参数的函数时需要括号
    'no-cond-assign': 2, // 在条件语句中禁止赋值运算符
    'no-const-assign': 2, // 禁止修改使用const声明的变量
    'no-dupe-args': 2, // 在函数定义中禁止重复参数
    'no-dupe-class-members': 2, // 禁止在类成员中重复名称
    'no-dupe-keys': 2, // 禁止对象重复声明属性
    'no-duplicate-case': 2, // 规则禁止重复案例标签
    'no-empty-pattern': 2, // 不允许空的解构模式
    'no-extra-parens': [2, 'functions'], // 禁止不必要的括号
    'no-fallthrough': 2, // 禁止太多陈述描述
    'no-implied-eval': 2, // 禁止使用隐式eval
    'no-inner-declarations': [2, 'functions'], // 禁止嵌套块中的变量或函数声明
    'no-label-var': 2, // 禁止变量名称的标签
    'no-lone-blocks': 2, // 禁止不必要的嵌套块
    'no-mixed-spaces-and-tabs': 2, // 禁止使用混合空格和制表符进行缩进
    'no-multi-spaces': 2, // 禁止多个空格
    'no-multi-str': 2, // 禁止多行字符串
    'no-multiple-empty-lines': [2, { // 禁止多个空行
      'max': 1
    }],
    'no-redeclare': 2,
    'no-regex-spaces': 2, // 禁止在正则表达式中使用多个空格
    'no-self-assign': 2, // 禁止自赋值
    'no-self-compare': 2, // 禁止自比较
    'no-shadow-restricted-names': 2, // 禁止使用保留字作为变量名
    'no-trailing-spaces': 2, // 禁止行末空格
    'no-undef': 0, // 禁止未定义的变量
    'no-unneeded-ternary': [2, { // 当存在更简单的替代方案时，不允许三元运算符
      'defaultAssignment': false
    }],
    'no-useless-call': 2, // 禁止不必要的call()和apply()方法
    'no-useless-computed-key': 2, // 禁止在对象上使用不必要的计算属性键
    'no-useless-constructor': 2, // 禁止不必要的构造方法
    'no-useless-escape': 0, // 禁止不必要的转义用法
    'no-whitespace-before-property': 2, // 在属性之前禁止空格
    'operator-linebreak': [2, 'after', { // 为维护强制执行一致的换行方式
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    'prefer-const': 1, // 建议使用const
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 禁止使用debugger
    // 'no-array-constructor': 2, // 禁止阵列构建器
    // 'no-caller': 2, // 禁止使用来电者/被叫者
    // 'no-console': 'off', // 不允许使用控制台
    // 'no-class-assign': 2, // 禁止修改类声明的变量
    // 'no-control-regex': 0, // 禁止正则表达式中的控制字符
    // 'no-delete-var': 2, // 禁止删除变量
    // 'no-empty-character-class': 2, // 禁止在正则表达式中使用空字符类
    // 'no-ex-assign': 2, // 禁止在catch子句中重新分配异常
    // 'no-extend-native': 2, // 禁止扩展原生对象
    // 'no-extra-bind': 2, // 禁止不必要的功能绑定
    // 'no-extra-boolean-cast': 2, // 禁止不必要的布尔类型转换
    // 'no-floating-decimal': 2, // 禁止浮动小数
    // 'no-func-assign': 2, // 禁止重新分配函数声明
    // 'no-invalid-regexp': 2, // 禁止在RegExp中使用无效的正则表达式字符串
    // 'no-irregular-whitespace': 2, // 不允许不规则的空白
    // 'no-native-reassign': 2, // 禁止重新分配原生对象
    // 'no-negated-in-lhs': 2, // 禁止在in操作符左侧使用否定的表达式
    // 'no-new-object': 2, // 禁止使用new Object()
    // 'no-new-require': 2, // 禁止使用new require()
    // 'no-new-symbol': 2, // 禁止使用new Symbol()
    // 'no-new-wrappers': 2, // 禁止使用new创建包装实例（String、Number、Boolean）
    // 'no-obj-calls': 2, // 禁止使用new创建对象
    // 'no-octal': 2, // 禁止使用八进制字面量
    // 'no-octal-escape': 2, // 禁止使用八进制转义序列
    // 'no-path-concat': 2, // 禁止使用路径拼接
    // 'no-proto': 2, // 禁止使用__proto__属性
    // 'no-return-assign': [2, 'except-parens'],
    // 'no-sequences': 2, // 禁止使用逗号运算符
    // 'no-spaced-func': 2, // 禁止在函数标识符和其调用之间有空格
    // 'no-sparse-arrays': 2, // 禁止稀疏数组
    // 'no-this-before-super': 2, // 禁止在构造函数中，在调用super()之前使用this或super
    // 'no-throw-literal': 2, // 禁止抛出字面量错误 throw 'error'
    // 'no-undef-init': 2, // 禁止将变量初始化为undefined
    // 'no-unexpected-multiline': 2, // 禁止出现令人困惑的多行表达式
    // 'no-unmodified-loop-condition': 2, // 禁止未修改的循环条件
    // 'no-unreachable': 2, // 返回，抛出，继续和中断语句后禁止无法访问的代码
    // 'no-unsafe-finally': 2, // 禁止finally块中的控制流语句
    // 'no-unused-vars': [1, { // 禁止使用未声明的变量
    //   'vars': 'all',
    //   'args': 'none'
    // }],
    // 'no-with': 2, // 禁用with
    // 'one-var': [2, {
    //   'initialized': 'never'
    // }],
    // 'padded-blocks': [2, 'never'], // 在块内要求或禁止填充
    // 'semi-spacing': [2, { // 在语句末尾要求或禁止分号的前后空格
    //   'before': false,
    //   'after': true
    // }],
    // 'space-before-blocks': [2, 'always'], // 不要存在多余的块空间
    // 'space-before-function-paren': [2, 'never'], // 在函数定义前要求或禁止函数定义的左括号之前要求或禁止空格
    // 'space-in-parens': [2, 'never'], // 在圆括号内要求或禁止空格
    // 'space-infix-ops': 2, // 禁止在中缀操作符前后有空格
    // 'space-unary-ops': [2, { // 禁止在一元操作符前后有空格
    //   'words': true,
    //   'nonwords': false
    // }],
    // 'spaced-comment': [2, 'always', { // 在注释前要求或禁止空格
    //   'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    // }],
    // 'template-curly-spacing': [2, 'never'], // 在模板字符串中要求或禁止模板字符串中的嵌入字符串的空格
    // 'use-isnan': 2, // 禁止比较时使用NaN
    // 'valid-typeof': 2, // 类型检查的字符串必须与typeof运算符的结果一致
    // 'wrap-iife': [2, 'any'], // 将匿名函数转换为立即执行函数
    // 'yield-star-spacing': [2, 'both'], // 在yield*语句中要求或禁止空格
    // 'yoda': [2, 'never'], // 禁止使用yoda条件表达式
    // 'object-curly-spacing': [2, 'always', { // 在对象字面量中要求或禁止花括号内的空格
    //   objectsInObjects: false
    // }],
    // 'array-bracket-spacing': [2, 'never'] // 在数组中要求或禁止花括号内的空格
  }
}
