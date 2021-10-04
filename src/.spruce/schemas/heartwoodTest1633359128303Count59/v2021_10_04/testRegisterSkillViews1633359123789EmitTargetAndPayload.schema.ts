import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1633359123789EmitTargetSchema_v2021_10_04 from '#spruce/schemas/heartwoodTest1633359128303Count59/v2021_10_04/testRegisterSkillViews1633359123789EmitTarget.schema'
import testRegisterSkillViews1633359123789EmitPayloadSchema_v2021_10_04 from '#spruce/schemas/heartwoodTest1633359128303Count59/v2021_10_04/testRegisterSkillViews1633359123789EmitPayload.schema'

const testRegisterSkillViews1633359123789EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1633359128303Count59.v2021_10_04.TestRegisterSkillViews1633359123789EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1633359123789EmitTargetAndPayload',
	version: 'v2021_10_04',
	namespace: 'HeartwoodTest1633359128303Count59',
	name: '',
	    fields: {
	            /** Source. */
	            'source': {
	                label: 'Source',
	                type: 'schema',
	                options: {schema: eventSourceSchema_v2021_09_13,}
	            },
	            /** . */
	            'target': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633359123789EmitTargetSchema_v2021_10_04,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1633359123789EmitPayloadSchema_v2021_10_04,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1633359123789EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1633359123789EmitTargetAndPayloadSchema