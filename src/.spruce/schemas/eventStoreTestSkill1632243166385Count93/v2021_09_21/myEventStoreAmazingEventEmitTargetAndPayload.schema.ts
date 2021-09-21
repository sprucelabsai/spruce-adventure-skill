import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import myEventStoreAmazingEventEmitTargetSchema_v2021_09_21 from '#spruce/schemas/eventStoreTestSkill1632243166385Count93/v2021_09_21/myEventStoreAmazingEventEmitTarget.schema'
import myEventStoreAmazingEventEmitPayloadSchema_v2021_09_21 from '#spruce/schemas/eventStoreTestSkill1632243166385Count93/v2021_09_21/myEventStoreAmazingEventEmitPayload.schema'

const myEventStoreAmazingEventEmitTargetAndPayloadSchema: SpruceSchemas.EventStoreTestSkill1632243166385Count93.v2021_09_21.MyEventStoreAmazingEventEmitTargetAndPayloadSchema  = {
	id: 'myEventStoreAmazingEventEmitTargetAndPayload',
	version: 'v2021_09_21',
	namespace: 'EventStoreTestSkill1632243166385Count93',
	name: '',
	    fields: {
	            /** Source. */
	            'source': {
	                label: 'Source',
	                type: 'schema',
	                options: {schema: eventSourceSchema_v2021_09_13,}
	            },
	            /** . */
	            'target': {
	                type: 'schema',
	                options: {schema: myEventStoreAmazingEventEmitTargetSchema_v2021_09_21,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: myEventStoreAmazingEventEmitPayloadSchema_v2021_09_21,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(myEventStoreAmazingEventEmitTargetAndPayloadSchema)

export default myEventStoreAmazingEventEmitTargetAndPayloadSchema
