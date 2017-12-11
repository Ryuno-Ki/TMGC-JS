export const string2svg = (svgString) => {
  const parser = new window.DOMParser()
  const svg = parser.parseFromString(svgString, 'image/svg+xml').firstChild
  return svg
}
