export function POST({ cookies }) {
	cookies.set('cookiesConsent', 'true', { path: '/' });
	return new Response();
}
