const fs = require('fs')
const path = require('path')
const memoize = require('memoizee')

const SUPPORTED_LOCALES = {
  EN: 'en',
  ES: 'es'
}

const getTranslations = locale => {
  let fileName = 'en.json'
  switch (locale) {
    case SUPPORTED_LOCALES.ES:
      fileName = 'es.json'
  }

  return fs.readFileSync(
    path.resolve(__dirname, `../../../build/translations/${fileName}`)
  )
}

module.exports =
  process.env.NODE_ENV === 'development'
    ? getTranslations
    : memoize(getTranslations)
