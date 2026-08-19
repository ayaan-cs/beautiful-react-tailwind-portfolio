module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'src/components/AboutSection.jsx', 'src/components/CertificatesSection.jsx', 'src/components/ContactSection.jsx', 'src/components/ExperienceSection.jsx', 'src/components/HeroSection.jsx', 'src/components/ProjectsSection.jsx', 'src/components/SkillsSection.jsx', 'src/components/StartupAnimation.jsx', 'src/components/WebGLStarfield.jsx', 'src/components/ui/**', 'src/pages/projects/**', 'src/pages/AllSkillsPage.jsx', 'src/utils/soundManager.js'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
