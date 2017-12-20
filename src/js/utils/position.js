export const getPetPosition = (state) => {
  const pet = state.pet
  const canvasWidth = state.canvasWidth
  const x = canvasWidth * pet.avatar.x / 100
  const y = canvasWidth * pet.avatar.y / 100
  return { x, y }
}

export const getPooPosition = (state) => {
  const pet = getPetPosition(state)
  const offset = { x: 10, y: 10 }
  const x = pet.x + offset.x
  const y = pet.y + offset.y
  return { x, y }
}

export const getFoodPosition = (state) => {
  const pet = getPetPosition(state)
  const offset = { x: 10, y: 10 }
  const x = pet.x - offset.x
  const y = pet.y - offset.y
  return { x, y }
}

export const getToiletPosition = (state) => {
  const x = state.canvasWidth
  const y = 0
  return { x, y }
}
