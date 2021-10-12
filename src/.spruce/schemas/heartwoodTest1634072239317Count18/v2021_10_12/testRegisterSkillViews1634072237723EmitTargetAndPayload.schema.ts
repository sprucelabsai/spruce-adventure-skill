import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import testRegisterSkillViews1634072237723EmitTargetSchema_v2021_10_12 from '#spruce/schemas/heartwoodTest1634072239317Count18/v2021_10_12/testRegisterSkillViews1634072237723EmitTarget.schema'
import testRegisterSkillViews1634072237723EmitPayloadSchema_v2021_10_12 from '#spruce/schemas/heartwoodTest1634072239317Count18/v2021_10_12/testRegisterSkillViews1634072237723EmitPayload.schema'

const testRegisterSkillViews1634072237723EmitTargetAndPayloadSchema: SpruceSchemas.HeartwoodTest1634072239317Count18.v2021_10_12.TestRegisterSkillViews1634072237723EmitTargetAndPayloadSchema  = {
	id: 'testRegisterSkillViews1634072237723EmitTargetAndPayload',
	version: 'v2021_10_12',
	namespace: 'HeartwoodTest1634072239317Count18',
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
	                options: {schema: testRegisterSkillViews1634072237723EmitTargetSchema_v2021_10_12,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: testRegisterSkillViews1634072237723EmitPayloadSchema_v2021_10_12,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1634072237723EmitTargetAndPayloadSchema)

export default testRegisterSkillViews1634072237723EmitTargetAndPayloadSchema
