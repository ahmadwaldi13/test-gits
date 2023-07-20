const denseRanking = (scores, gitsScores) => {
    const uniqueScores = Array.from(new Set(scores)).sort((a, b) => b - a)
    
    const rankDict = {}
    let rank = 1
    for (const score of uniqueScores) {
      rankDict[score] = rank
      rank++
    }
    
    const result = []
    for (const gitsScore of gitsScores) {
      let gitsRank = 1
      for (const score of uniqueScores) {
        if (gitsScore >= score) {
          break
        }
        gitsRank++
      }
      result.push(rankDict[gitsScore] || gitsRank)
    }
  
    return result
  }
  
  const numPlayers = 7
  const playerScores = [100, 100, 50, 40, 40, 20, 10]
  const numGames = 4
  const gitsScores = [5, 25, 50, 120]
  const result = denseRanking(playerScores, gitsScores)
  console.log(result)
  