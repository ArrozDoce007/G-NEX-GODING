export const WHATSAPP_NUMBER = '5598983393583'

export function sendWhatsAppMessage(message: string = 'Quero cotar um Projeto') {
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
  window.open(whatsappUrl, '_blank')
}
