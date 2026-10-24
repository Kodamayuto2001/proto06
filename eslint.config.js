import pluginVue from 'eslint-plugin-vue'

export default [
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.js', '**/*.vue'],
    rules: {
      'no-unused-vars': 'error'
    }
  }
]
