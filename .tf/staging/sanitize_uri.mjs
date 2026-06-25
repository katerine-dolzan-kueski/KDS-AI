export const handler = async (event) => {
    const eventRecord = event.Records[0];
    const request = eventRecord.cf.request;
    const clientIP = request.clientIp;
    const uri = request.uri;

    const WHITELISTED_IP = [
        '34.199.96.249', // VPN AWS (ex VPN-Full)
        '3.219.82.53',   // VPN AWS public Staging 1
        '52.72.24.29',   // VPN AWS public Staging 2
    ];

    const shouldAllowIP = WHITELISTED_IP.includes(clientIP);

    if (!shouldAllowIP) {
        // Send error message
        return {
            body: 'IP address not authorized',
            bodyEncoding: 'text',
            status: '403',
            statusDescription: 'FORBIDDEN'
        };
    }

    if (uri == '' || uri == null || uri == '/') {
        return request;
    }

    // if URI includes ".", indicates file extension, return early and don't modify URI
    if (uri.includes('.')) {
        return request;
    }

    // if URI ends with "/" slash, then we need to remove the slash first before appending .html
    if (uri.endsWith('/')) {
        request.uri = request.uri.substring(0, request.uri.length - 1);
    }

    request.uri += '.html';
    return request;
};