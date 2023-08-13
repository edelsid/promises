import GameSavingLoader from '../app';

test('reading data', (done) => {
  const result = GameSavingLoader.load();
  result.then((saving) => {
    expect(saving).toEqual({
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    });
    done();
  });
});
