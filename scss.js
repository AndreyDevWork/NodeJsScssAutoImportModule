const fs = require('fs');
const path = require('path');
const configs = require('./config'); // Подключаем файл с настройками

configs.forEach(config => {
    const mainScssFile = config.mainScssFile;
    const scssDirectory = config.scssDirectory;
    const pathThroughMainFile = config.pathThroughMainFile;

    fs.watch(scssDirectory, (event, filename) => {
        // Отслеживаем изменения в указанной директории
        if (event === 'rename' && path.extname(filename) === '.scss') {
            const importStatement = `@import '${pathThroughMainFile}${filename.replace('.scss', '')}';\n`;
            if (fs.existsSync(path.join(scssDirectory, filename))) {
                fs.appendFileSync(mainScssFile, importStatement);
                console.log(`Imported ${filename} into ${mainScssFile}`);
            } else {
                const fileToDelete = `@import '${pathThroughMainFile}${filename.replace('.scss', '')}';\n`;
                const fileContent = fs.readFileSync(mainScssFile, 'utf8');
                const updatedContent = fileContent.replace(fileToDelete, '');
                fs.writeFileSync(mainScssFile, updatedContent, 'utf8');
                console.log(`Removed import of ${filename} from ${mainScssFile}`);
            }
        }
    });
});
