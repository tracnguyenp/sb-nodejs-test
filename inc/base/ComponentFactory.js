/**
 * Created by tracnguyen on 11/23/17.
 */
class ComponentFactory {
    static initComponent(componentName, configs) {
        let fs = require('fs');
        let classFilePath;

        if (configs.mainConfigs.components.hasOwnProperty(componentName) && 'undefined' !== typeof configs.mainConfigs.components[componentName].class) {
            classFilePath = configs.mainConfigs.basePath + '/' + configs.mainConfigs.components[componentName].class;
            if (fs.existsSync(classFilePath + '.js')) {
                let objComponent = require(classFilePath);
                return new objComponent(configs.mainConfigs.components[componentName]);
            } else {
                console.error('File not exists ' + classFilePath);
            }
        }
        return false;
    }
}

module.exports = ComponentFactory;