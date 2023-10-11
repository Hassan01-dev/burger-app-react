import html2canvas from 'html2canvas'

const ingredientPrice = {'cheese': 0.63, 'meat': 1.25, 'lettuse': 0.15, 'tomato': 0.38}
const ingredientList = ['cheese', 'lettuse', 'meat', 'tomato']

const calculatePrice = ingredients => ingredients.reduce((prev, curr) => prev + ingredientPrice[curr.type], 1)


  
const createSnapshot = async (element, filename) => {
  const result = await html2canvas(element)
  const image = result.toDataURL('image/jpg', 1.0);
  downloadImage(image, filename);
} 

const downloadImage = (blob, filename) => {
  const dLink = document.createElement('a')
  dLink.style = 'display: none'
  dLink.download = filename
  dLink.href = blob
  document.body.appendChild(dLink)
  dLink.click()
  document.body.removeChild(dLink)
  dLink.remove()
}

export { ingredientPrice, ingredientList, calculatePrice, createSnapshot }