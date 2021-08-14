import { coreEventContracts } from '@sprucelabs/mercury-types'
import appointmentsDidBookAppointmentsEventContract_v2021_06_23, {
	DidBookAppointmentsEventContract as AppointmentsDidBookAppointmentsEventContract_v2021_06_23,
} from '#spruce/events/appointments/didBookAppointments.v2021_06_23.contract'
import heartwoodDidRegisterSkillViewsEventContract_v2021_02_11, {
	DidRegisterSkillViewsEventContract as HeartwoodDidRegisterSkillViewsEventContract_v2021_02_11,
} from '#spruce/events/heartwood/didRegisterSkillViews.v2021_02_11.contract'
import heartwoodGenerateUrlEventContract_v2021_02_11, {
	GenerateUrlEventContract as HeartwoodGenerateUrlEventContract_v2021_02_11,
} from '#spruce/events/heartwood/generateUrl.v2021_02_11.contract'
import heartwoodGetSkillViewsEventContract_v2021_02_11, {
	GetSkillViewsEventContract as HeartwoodGetSkillViewsEventContract_v2021_02_11,
} from '#spruce/events/heartwood/getSkillViews.v2021_02_11.contract'
import heartwoodRegisterSkillViewsEventContract_v2021_02_11, {
	RegisterSkillViewsEventContract as HeartwoodRegisterSkillViewsEventContract_v2021_02_11,
} from '#spruce/events/heartwood/registerSkillViews.v2021_02_11.contract'
import heartwoodTest1628887294568Count28TestRegisterSkillViews1628887286402EventContract_v2021_08_13, {
	TestRegisterSkillViews1628887286402EventContract as HeartwoodTest1628887294568Count28TestRegisterSkillViews1628887286402EventContract_v2021_08_13,
} from '#spruce/events/heartwoodTest1628887294568Count28/testRegisterSkillViews1628887286402.v2021_08_13.contract'
import mySecondSkill1628887207605Count91MyNewEventEventContract_v2021_08_13, {
	MyNewEventEventContract as MySecondSkill1628887207605Count91MyNewEventEventContract_v2021_08_13,
} from '#spruce/events/mySecondSkill1628887207605Count91/myNewEvent.v2021_08_13.contract'

export default [
	heartwoodDidRegisterSkillViewsEventContract_v2021_02_11,
	heartwoodGenerateUrlEventContract_v2021_02_11,
	heartwoodGetSkillViewsEventContract_v2021_02_11,
	heartwoodRegisterSkillViewsEventContract_v2021_02_11,
	appointmentsDidBookAppointmentsEventContract_v2021_06_23,
	mySecondSkill1628887207605Count91MyNewEventEventContract_v2021_08_13,
	heartwoodTest1628887294568Count28TestRegisterSkillViews1628887286402EventContract_v2021_08_13,
	...coreEventContracts,
]

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface SkillEventSignatures {
		'heartwood.did-register-skill-views::v2021_02_11': HeartwoodDidRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.did-register-skill-views::v2021_02_11']

		'heartwood.generate-url::v2021_02_11': HeartwoodGenerateUrlEventContract_v2021_02_11['eventSignatures']['heartwood.generate-url::v2021_02_11']

		'heartwood.get-skill-views::v2021_02_11': HeartwoodGetSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.get-skill-views::v2021_02_11']

		'heartwood.register-skill-views::v2021_02_11': HeartwoodRegisterSkillViewsEventContract_v2021_02_11['eventSignatures']['heartwood.register-skill-views::v2021_02_11']

		'appointments.did-book-appointments::v2021_06_23': AppointmentsDidBookAppointmentsEventContract_v2021_06_23['eventSignatures']['appointments.did-book-appointments::v2021_06_23']

		'my-second-skill-1628887207605-count-91.my-new-event::v2021_08_13': MySecondSkill1628887207605Count91MyNewEventEventContract_v2021_08_13['eventSignatures']['my-second-skill-1628887207605-count-91.my-new-event::v2021_08_13']

		'heartwood-test-1628887294568-count-28.test-register-skill-views1628887286402::v2021_08_13': HeartwoodTest1628887294568Count28TestRegisterSkillViews1628887286402EventContract_v2021_08_13['eventSignatures']['heartwood-test-1628887294568-count-28.test-register-skill-views1628887286402::v2021_08_13']
	}
}
