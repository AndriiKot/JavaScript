/** @type {import('eslint').Linter.Config} */
const config = {
    ignores: [
        '**/*.spec.js', // Например, игнорирование тестов
        'node_modules/**', // Игнорирование папки node_modules
    ],
    // Другие настройки ESLint здесь
};

module.exports = config;

