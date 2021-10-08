import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1633704428874EmitTargetSchema: SpruceSchemas.HeartwoodTest1633704430799Count60.v2021_10_08.TestRegisterSkillViews1633704428874EmitTargetSchema  = {
	id: 'testRegisterSkillViews1633704428874EmitTarget',
	version: 'v2021_10_08',
	namespace: 'HeartwoodTest1633704430799Count60',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633704428874EmitTargetSchema)

export default testRegisterSkillViews1633704428874EmitTargetSchema