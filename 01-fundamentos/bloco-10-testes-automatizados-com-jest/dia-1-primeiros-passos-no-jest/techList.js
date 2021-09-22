function techList(arr, pessoa) {
  if (arr.length === 0) return 'Vazio!'
  const percorre = arr.sort().map((hardSkill) => {
    return {
      tech: hardSkill,
      name: pessoa,
    }
  })
  return percorre;
}
techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')

module.exports = techList