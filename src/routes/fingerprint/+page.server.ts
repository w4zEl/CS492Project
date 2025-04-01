export const load = ({ request }) => {
	return {
		accept: request.headers.get('Accept'),
		acceptEncoding: request.headers.get('Accept-Encoding'),
		acceptLanguage: request.headers.get('Accept-Language'),
		secChUa: request.headers.get('sec-ch-ua')
	};
};
