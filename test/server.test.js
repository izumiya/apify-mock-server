const server = require('../src/server');

test("server", async () => {
    const s = await server.start();
    expect(s.address().port).not.toBeNull();
    await s.close();
});