// importar o express
import express from 'express'

// criar uma instancia (chamada app) desse express
const app = express()

// indica para o expresse ler body com json
app.use(express.json())

// teste de dados - mock
const SELECOES = [ // array de objetos
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 2, selecao: 'Suíça', grupo: 'G'},
    {id: 3, selecao: 'Camarões', grupo: 'G'},
    {id: 4, selecao: 'Sérvia', grupo: 'G'},
]

// pesquisa por id
function buscarSelecaoPorIr(idRecebido){
    //recebe por parametro o ID, que retornará do array, filtrando o selecionado
    return SELECOES.filter(selecao => selecao.id == idRecebido)
}


// criar uma rota padrao - raiz -> / 
// req = request
// res = response
app.get('/', (req, res) => {
    res.send('Essa é a resposta ao acessar a requisição!')
    
})

// exibir as seleções salvas dentro da constante SELECOES
app.get('/selecoes', (req, res) => {
    res.status(200).send(SELECOES)
})

// buscar selecao por id
app.get('/selecoes/:id', (req, res) => {
   // let index = req.params.id
   res.json(buscarSelecaoPorIr(req.params.id))
})


// adicionar novas seleções
app.post('/selecoes', (req, res) => {
    //adicionar um elemento no array = push
    SELECOES.push(req.body)
    res.status(201).send('Seleção inserida com sucesso')
})



export default app 