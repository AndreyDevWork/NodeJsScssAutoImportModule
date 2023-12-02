module.exports = [
    {
        mainScssFile: '../../scss/blocks.scss', // Файл, куда импортировать
        scssDirectory: '../../scss/blocks/', // Директория, за которой следим
        pathThroughMainFile: 'blocks/', // Путь к файлу относительно файла куда импортируем
    },
    {
        mainScssFile: '../../scss/media-query.scss', // Файл, куда импортировать
        scssDirectory: '../../scss/blocks/media-query', // Директория, за которой следим
        pathThroughMainFile: 'blocks/media-query/', // Путь к файлу относительно файла куда импортируем
    }
];


