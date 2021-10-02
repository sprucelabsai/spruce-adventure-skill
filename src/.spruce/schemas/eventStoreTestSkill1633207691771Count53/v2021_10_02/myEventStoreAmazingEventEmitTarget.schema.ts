import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const myEventStoreAmazingEventEmitTargetSchema: SpruceSchemas.EventStoreTestSkill1633207691771Count53.v2021_10_02.MyEventStoreAmazingEventEmitTargetSchema  = {
	id: 'myEventStoreAmazingEventEmitTarget',
	version: 'v2021_10_02',
	namespace: 'EventStoreTestSkill1633207691771Count53',
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

SchemaRegistry.getInstance().trackSchema(myEventStoreAmazingEventEmitTargetSchema)

export default myEventStoreAmazingEventEmitTargetSchema
