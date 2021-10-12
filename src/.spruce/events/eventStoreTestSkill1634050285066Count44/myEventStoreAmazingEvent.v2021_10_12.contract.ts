import myEventStoreAmazingEventEmitTargetAndPayloadSchema from '#spruce/schemas/eventStoreTestSkill1634050285066Count44/v2021_10_12/myEventStoreAmazingEventEmitTargetAndPayload.schema'
import myEventStoreAmazingEventResponsePayloadSchema from '#spruce/schemas/eventStoreTestSkill1634050285066Count44/v2021_10_12/myEventStoreAmazingEventResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'


const myEventStoreAmazingEventEventContract = buildEventContract({
    eventSignatures: {
        'event-store-test-skill-1634050285066-count-44.my-event-store-amazing-event::v2021_10_12': {
            isGlobal: true,
            emitPayloadSchema: myEventStoreAmazingEventEmitTargetAndPayloadSchema,
            responsePayloadSchema: myEventStoreAmazingEventResponsePayloadSchema,
            emitPermissionContract: buildPermissionContract({
  "id": "myEventStoreAmazingEventEmitPermissions",
  "name": "my event store amazing event",
  "description": null,
  "requireAllPermissions": false,
  "permissions": [
    {
      "id": "can-high-five",
      "name": "Can give high five",
      "description": "Will this person be allowed to high five?",
      "requireAllStatuses": false,
      "defaults": {
        "skill": false,
        "owner": null,
        "groupManager": null,
        "manager": null,
        "teammate": null,
        "guest": null,
        "anonymous": null,
        "loggedIn": null
      },
      "can": null
    }
  ]
}),
            listenPermissionContract: buildPermissionContract({
  "id": "myEventStoreAmazingEventListenPermissions",
  "name": "my event store amazing event",
  "description": null,
  "requireAllPermissions": false,
  "permissions": [
    {
      "id": "can-high-five",
      "name": "Can give high five",
      "description": "Will this person be allowed to high five?",
      "requireAllStatuses": false,
      "defaults": {
        "skill": false,
        "owner": null,
        "groupManager": null,
        "manager": null,
        "teammate": null,
        "guest": null,
        "anonymous": null,
        "loggedIn": null
      },
      "can": null
    }
  ]
}),
        }
    }
})
export default myEventStoreAmazingEventEventContract

export type MyEventStoreAmazingEventEventContract = typeof myEventStoreAmazingEventEventContract