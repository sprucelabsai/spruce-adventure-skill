import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633481365956EmitTargetSchema: SpruceSchemas.HeartwoodTest1633481367494Count6.v2021_10_06.TestRegisterSkillViews1633481365956EmitTargetSchema  = {
	id: 'testRegisterSkillViews1633481365956EmitTarget',
	version: 'v2021_10_06',
	namespace: 'HeartwoodTest1633481367494Count6',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633481365956EmitTargetSchema)

export default testRegisterSkillViews1633481365956EmitTargetSchema
