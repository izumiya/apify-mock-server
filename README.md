# Apify Mock Server

## Example

```typescript
import { ApifyClient } from 'apify-client';
import mockServer from 'apify-mock-server';

describe('apify-mock-server', () => {
	let baseUrl: string;
	let apify: ApifyClient;

	beforeAll(async () => {
		const server = await mockServer.start();
		baseUrl = `http://localhost:${server.address().port}`;
		apify = new ApifyClient({
			baseUrl,
			maxRetries: 0,
			token: 'default-token',
		});
	});

	afterAll(async () => {
		await mockServer.close();
	});
});
```