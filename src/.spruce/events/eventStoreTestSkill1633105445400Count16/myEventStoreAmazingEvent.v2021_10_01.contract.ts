import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import myEventStoreAmazingEventEmitTargetAndPayloadSchema from '#spruce/schemas/eventStoreTestSkill1633105445400Count16/v2021_10_01/myEventStoreAmazingEventEmitTargetAndPayload.schema'
import myEventStoreAmazingEventResponsePayloadSchema from '#spruce/schemas/eventStoreTestSkill1633105445400Count16/v2021_10_01/myEventStoreAmazingEventResponsePayload.schema'

const myEventStoreAmazingEventEventContract = buildEventContract({
	eventSignatures: {
		'event-store-test-skill-1633105445400-count-16.my-event-store-amazing-event::v2021_10_01':
			{
				isGlobal: true,
				emitPayloadSchema: myEventStoreAmazingEventEmitTargetAndPayloadSchema,
				responsePayloadSchema: myEventStoreAmazingEventResponsePayloadSchema,
				emitPermissionContract: buildPermissionContract({
					id: 'myEventStoreAmazingEventEmitPermissions',
					name: 'my event store amazing event',
					description: null,
					requireAllPermissions: false,
					permissions: [
						{
							id: 'can-high-five',
							name: 'Can give high five',
							description: 'Will this person be allowed to high five?',
							requireAllStatuses: false,
							defaults: {
								skill: false,
								owner: null,
								groupManager: null,
								manager: null,
								teammate: null,
								guest: null,
								anonymous: null,
								loggedIn: null,
							},
							can: null,
						},
					],
				}),
				listenPermissionContract: buildPermissionContract({
					id: 'myEventStoreAmazingEventListenPermissions',
					name: 'my event store amazing event',
					description: null,
					requireAllPermissions: false,
					permissions: [
						{
							id: 'can-high-five',
							name: 'Can give high five',
							description: 'Will this person be allowed to high five?',
							requireAllStatuses: false,
							defaults: {
								skill: false,
								owner: null,
								groupManager: null,
								manager: null,
								teammate: null,
								guest: null,
								anonymous: null,
								loggedIn: null,
							},
							can: null,
						},
					],
				}),
			},
	},
})
export default myEventStoreAmazingEventEventContract

export type MyEventStoreAmazingEventEventContract =
	typeof myEventStoreAmazingEventEventContract