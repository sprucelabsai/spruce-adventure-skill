import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const myEventStoreAmazingEventResponsePayloadSchema: SpruceSchemas.EventStoreTestSkill1632963838767Count13.v2021_09_30.MyEventStoreAmazingEventResponsePayloadSchema  = {
	id: 'myEventStoreAmazingEventResponsePayload',
	version: 'v2021_09_30',
	namespace: 'EventStoreTestSkill1632963838767Count13',
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

SchemaRegistry.getInstance().trackSchema(myEventStoreAmazingEventResponsePayloadSchema)

export default myEventStoreAmazingEventResponsePayloadSchema
