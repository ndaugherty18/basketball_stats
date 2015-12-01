export default function games(req) {
  const games = {
    name: "Cavaliers"
  }
  console.log(games);
  return Promise.resolve(games);
}
