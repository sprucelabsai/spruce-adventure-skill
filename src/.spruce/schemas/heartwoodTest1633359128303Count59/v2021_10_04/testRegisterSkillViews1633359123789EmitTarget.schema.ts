import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633359123789EmitTargetSchema: SpruceSchemas.HeartwoodTest1633359128303Count59.v2021_10_04.TestRegisterSkillViews1633359123789EmitTargetSchema  = {
	id: 'testRegisterSkillViews1633359123789EmitTarget',
	version: 'v2021_10_04',
	namespace: 'HeartwoodTest1633359128303Count59',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633359123789EmitTargetSchema)

export default testRegisterSkillViews1633359123789EmitTargetSchema