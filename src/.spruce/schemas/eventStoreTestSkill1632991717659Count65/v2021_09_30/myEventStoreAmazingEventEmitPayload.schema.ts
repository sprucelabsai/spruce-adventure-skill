import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const myEventStoreAmazingEventEmitPayloadSchema: SpruceSchemas.EventStoreTestSkill1632991717659Count65.v2021_09_30.MyEventStoreAmazingEventEmitPayloadSchema  = {
	id: 'myEventStoreAmazingEventEmitPayload',
	version: 'v2021_09_30',
	namespace: 'EventStoreTestSkill1632991717659Count65',
	name: '',
	    fields: {
	            /** Update me. */
	            'aTextField': {
	                label: 'Update me',
	                type: 'text',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(myEventStoreAmazingEventEmitPayloadSchema)

export default myEventStoreAmazingEventEmitPayloadSchema