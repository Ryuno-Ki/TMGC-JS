const DEFAULT_TITLE = 'Tamagotchi time!'

export const getTitle = (navigation) => {
  let title

  switch (navigation) {
    case 'feed':
      title = `Feeding | ${DEFAULT_TITLE}`
      break
    case 'play':
      title = `Playing | ${DEFAULT_TITLE}`
      break
    case 'stats':
      title = `Statistics | ${DEFAULT_TITLE}`
      break
    case 'toilet':
      title = `Cleaning | ${DEFAULT_TITLE}`
      break
    default:
      title = DEFAULT_TITLE
  }
  return title
}
