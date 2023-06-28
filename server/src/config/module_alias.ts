import moduleAlias from 'module-alias'
import path from 'path'

const rootDir = path.join(__dirname, '../..')

console.log(rootDir)

moduleAlias.addAliases({
    '@': path.join(rootDir, 'src')
})

moduleAlias()
