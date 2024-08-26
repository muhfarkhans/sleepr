it('Should pass', () => {
  expect(true).toBeTruthy();
});

describe('Health', () => {
  test('Reservations', async () => {
    const response = await fetch('http://localhost:3000');
    expect(response.ok).toBeTruthy();
  });
});
