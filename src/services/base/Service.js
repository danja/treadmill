
import { EventEmitter } from 'events'
import grapoi from 'grapoi'
import ns from '../../utils/ns.js'

/**
 * Base class for services.
 * @extends EventEmitter
 */
class Service extends EventEmitter {

    /**
     * Creates an instance of Service.
     * @param {Object} config - The configuration object for the service.
     */
    constructor(config) {
        super()
        this.config = config
        this.messageQueue = []
        this.processing = false
        this.doneMessage = '~[DONE]~'
    }

    /**
     * Locates the configuration node in services.ttl for the service.
     * @returns {Object} - The configuration node.
     */
    locateConfig() {
        const dataset = this.config
        const poi = grapoi({ dataset, term: this.configKey }).in()
        const configNode = poi.out(ns.trm.value)
        return configNode
    }

    /**
     * Receives data and context for processing.
     * @param {*} data - The data to be processed.
     * @param {*} context - The context for processing.
     */
    async receive(data, context) {
        await this.enqueue(data, context)
    }

    /**
     * Enqueues data and context for processing.
     * @param {*} data - The data to be processed.
     * @param {*} context - The context for processing.
     */
    async enqueue(data, context) {
        this.messageQueue.push({ data, context })
        if (!this.processing) {
            this.executeQueue()
        }
    }

    /**
     * Executes the message queue.
     */
    async executeQueue() {
        this.processing = true
        while (this.messageQueue.length > 0) {
            const { data, context } = this.messageQueue.shift()
            await this.execute(data, context)
        }
        this.processing = false
    }

    /**
     * Executes the processing logic for the service.
     * @param {*} data - The data to be processed.
     * @param {*} context - The context for processing.
     */
    async execute(data, context) {
        throw new Error('execute method not implemented')
    }

    /**
     * Emits a message with data and context.
     * @param {string} message - The message to emit.
     * @param {*} data - The data to emit.
     * @param {*} context - The context for emitting.
     */
    async doEmit(message, data, context) {
        this.emit(message, data, context)
    }
}

export default Service
