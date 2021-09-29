import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const myEventStoreAmazingEventResponsePayloadSchema: SpruceSchemas.EventStoreTestSkill1632936125648Count20.v2021_09_29.MyEventStoreAmazingEventResponsePayloadSchema  = {
	id: 'myEventStoreAmazingEventResponsePayload',
	version: 'v2021_09_29',
	namespace: 'EventStoreTestSkill1632936125648Count20',
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