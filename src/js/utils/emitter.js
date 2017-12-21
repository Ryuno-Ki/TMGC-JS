export const emitAfter = (options, callback) => {
  const { state, identifier, delay, emit } = options
  const oldHandler = state.timeoutHandlers[ identifier ]
  if (oldHandler) { clearTimeout(oldHandler) }

  const handler = setTimeout(() => {
    if (callback) {
      callback()
    }
    emit(identifier)
  }, delay)
  state.timeoutHandlers[ identifier ] = handler
}
