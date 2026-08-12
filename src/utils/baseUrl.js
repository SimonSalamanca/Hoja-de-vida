let baseUrl = './'
if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) {
  baseUrl = import.meta.env.BASE_URL
}

export { baseUrl }
