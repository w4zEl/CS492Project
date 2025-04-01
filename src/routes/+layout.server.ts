import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	return {
		cookiesConsent: !!cookies.get('cookiesConsent')
	};
};
