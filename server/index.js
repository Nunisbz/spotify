import { createServer } from 'node:http'


const servidor = createServer(() => {
    console.log('qualquer coisa')
    res.write('ta funfando')
    return res.end()
})

servidor.listen(8000)