import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633724711361EmitPayloadSchema: SpruceSchemas.HeartwoodTest1633724720825Count65.v2021_10_08.TestRegisterSkillViews1633724711361EmitPayloadSchema  = {
	id: 'testRegisterSkillViews1633724711361EmitPayload',
	version: 'v2021_10_08',
	namespace: 'HeartwoodTest1633724720825Count65',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633724711361EmitPayloadSchema)

export default testRegisterSkillViews1633724711361EmitPayloadSchema
