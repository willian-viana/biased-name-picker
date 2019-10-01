export default const namePicker = () => {
  const choices = [
    { name: 'Reginaldo', percentage: 10 },
    { name: 'Willian', percentage: 10 },
    { name: 'Kaio', percentage: 10 },
    { name: 'Bruno', percentage: 30 },
    { name: 'Junior', percentage: 30 },
    { name: 'Gustavo', percentage: 10 },
    { name: 'Miguel', percentage: 10 },
    { name: 'Reginaldo', percentage: 10 },
    { name: 'Willian', percentage: 10 },
    { name: 'Kaio', percentage: 10 },
    { name: 'Tabata', percentage: 30 },
    { name: 'Claudio', percentage: 30 },
    { name: 'Gustavo', percentage: 10 },
    { name: 'Miguel', percentage: 10 },
    { name: 'Jorge', percentage: 30 }
  ]

  const baseRandom = choices.reduce((acc, cur) => {
    if (acc.percentage)
      return acc.percentage + cur.percentage

    return acc + cur.percentage
  })
  
  const random = Math.floor(Math.random() * (baseRandom - 0) + 0)

  let probability = 0

  const item = choices.find(candidate => {
    probability += candidate.percentage

    if (random <= probability) {
      return candidate
    }
  })

  console.log(`sorteado foi ${item.name} com ${item.percentage}% e o random foi ${random}`)
}







