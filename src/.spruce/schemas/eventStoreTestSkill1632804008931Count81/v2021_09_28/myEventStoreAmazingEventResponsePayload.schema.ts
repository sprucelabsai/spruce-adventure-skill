import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const myEventStoreAmazingEventResponsePayloadSchema: SpruceSchemas.EventStoreTestSkill1632804008931Count81.v2021_09_28.MyEventStoreAmazingEventResponsePayloadSchema  = {
	id: 'myEventStoreAmazingEventResponsePayload',
	version: 'v2021_09_28',
	namespace: 'EventStoreTestSkill1632804008931Count81',
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
