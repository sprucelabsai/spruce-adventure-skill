import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const testRegisterSkillViews1632991790684ResponsePayloadSchema: SpruceSchemas.HeartwoodTest1632991792976Count17.v2021_09_30.TestRegisterSkillViews1632991790684ResponsePayloadSchema  = {
	id: 'testRegisterSkillViews1632991790684ResponsePayload',
	version: 'v2021_09_30',
	namespace: 'HeartwoodTest1632991792976Count17',
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

SchemaRegistry.getInstance().trackSchema(testRegisterSkillViews1632991790684ResponsePayloadSchema)

export default testRegisterSkillViews1632991790684ResponsePayloadSchema
