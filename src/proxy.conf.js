import HttpsProxyAgent from 'https-proxy-agent';

const proxyConfig = [{
  context: '/uploads',
  target: 'http://54.147.235.44:1337',
  secure: false
}];

export default (proxyConfig) => {
  const proxyServer = process.env.http_proxy || process.env.HTTP_PROXY;
  if (proxyServer) {
    const agent = new HttpsProxyAgent(proxyServer);
    console.log('Using corporate proxy server: ' + proxyServer);

    for (const entry of proxyConfig) {
      entry.agent = agent;
    }
  }

  return proxyConfig;
};