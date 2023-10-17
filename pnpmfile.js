// pnpmfile.js
module.exports = {
  hooks: {
    readPackage
  }
}

function readPackage (pkg, context) {
  // Agregar la dependencia de json-server al archivo package.json
  pkg.dependencies = pkg.dependencies || {}
  pkg.dependencies['json-server'] = '*'
  return pkg
}
