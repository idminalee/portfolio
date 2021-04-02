export const displayFlex = (flex = 'flex', jc = 'center', ai = 'center') => {
  if (flex === 'flex' || flex === 'inline-flex') {
    return `
      display: ${flex};
      justify-content: ${jc};
      align-items: ${ai};
    `
  }
}
