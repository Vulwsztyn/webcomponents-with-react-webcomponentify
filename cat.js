const fs = require('fs-extra')
const concat = require('concat')

build = async () => {
  const files = ['./docs/bundle.js', ...[...Array(480).keys()].map((_, i) => `./docs/${i}.bundle.js`)]

  await fs.ensureDir('widget')
  await concat(files, 'widget/asd.js')
  //   console.log('files', files)
}
build()
