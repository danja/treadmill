import path from 'path'
import { fileURLToPath } from 'url'

import logger from '../utils/Logger.js'
import footpath from '../utils/footpath.js'

import TransmissionBuilder from '../mill/TransmissionBuilder.js'

logger.setLogLevel("debug")
logger.debug("Hello, logger!")
logger.debug("process.cwd() = " + process.cwd())

const transmissionConfigFile = 'transmissions/string-pipeline_transmission.ttl'
const servicesConfigFile = 'transmissions/string-pipeline_services.ttl' // not used

const tcf = footpath.resolve(import.meta.url, '../', transmissionConfigFile)
const scf = footpath.resolve(import.meta.url, '../', servicesConfigFile)

const transmission = await TransmissionBuilder.build(tcf, scf)

transmission.execute('Hello')
