function solution(players, callings) {
  for (let name of callings) {
    let rating = players.indexOf(name);
    if (rating > 0) {
      [players[rating - 1], players[rating]] = [
        players[rating],
        players[rating - 1],
      ];
    }
  }
  return players;
}
