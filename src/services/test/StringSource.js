import SourceService from '../base/SourceService.js'

class StringSource extends SourceService {

    constructor(config) {
        super(config)
    }

    async execute(data, context) {
        console.log("context = " + context)
        console.log("data = " + data)
        this.emit('message', data, context)
    }
}

export default StringSource




