
//importar o app do arquivo app.js
import app from './src/app.js'


// definir uma porta local no projeto
const PORT = 3000

// escutar a porta 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})