import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1632927038091EmitPayloadSchema: SpruceSchemas.HeartwoodTest1632927042665Count33.v2021_09_29.TestRegisterSkillViews1632927038091EmitPayloadSchema  = {
	id: 'testRegisterSkillViews1632927038091EmitPayload',
	version: 'v2021_09_29',
	namespace: 'HeartwoodTest1632927042665Count33',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1632927038091EmitPayloadSchema)

export default testRegisterSkillViews1632927038091EmitPayloadSchema
