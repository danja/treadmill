import logger from '../../utils/Logger.js'
import Service from './Service.js'

class ProcessService extends Service {
    constructor(config) {
        super(config)
    }

    async execute(data) {
        this.emit('data', data)
    }
}

export default ProcessService