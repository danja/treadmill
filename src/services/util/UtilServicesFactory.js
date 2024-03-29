import logger from '../../utils/Logger.js'
import ns from '../../utils/ns.js'

import ShowMessage from './ShowMessage.js'



class UtilServicesFactory {
    static createService(type, config) {
        logger.debug("ServiceFactory.createService : " + type.value)

        if (type.equals(ns.t.Halt)) {
            return new Halt(config)
        }
        if (type.equals(ns.t.ShowData)) {
            return new ShowMessage(config)
        }
        return false
        //  throw new Error("Unknown service type: " + type.value)
    }
}

export default UtilServicesFactory