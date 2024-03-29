import logger from '../../utils/Logger.js'
import SinkService from '../base/SinkService.js'

class ShowMessage extends SinkService {

    execute(data, context) {

        logger.log(data.toString())
        //    logger.log("\n\nStringSink outputs : \"" + data + "\"\n\n")

        logger.log("\n***  ShowDataService ***")
        logger.log("filename : " + context.filename)

    }
}

export default ShowMessage
