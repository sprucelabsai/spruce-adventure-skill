import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633338527002ResponsePayloadSchema: SpruceSchemas.HeartwoodTest1633338529459Count56.v2021_10_04.TestRegisterSkillViews1633338527002ResponsePayloadSchema  = {
	id: 'testRegisterSkillViews1633338527002ResponsePayload',
	version: 'v2021_10_04',
	namespace: 'HeartwoodTest1633338529459Count56',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633338527002ResponsePayloadSchema)

export default testRegisterSkillViews1633338527002ResponsePayloadSchema