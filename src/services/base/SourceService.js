import Service from './Service.js'

class SourceService extends Service {
    constructor(config) {
        super(config);
    }

    /*
    async execute(data, context) {
        logger.log('in SourceService, data = ' + data)
        return data
    }
    */
}

export default SourceService