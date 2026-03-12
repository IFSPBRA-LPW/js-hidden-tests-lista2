const ex = require("../exercicios-2")

describe("ARRAYS", () => {

test("primeiroElemento", () => {
expect(ex.primeiroElemento([1,2,3])).toBe(1)
})

test("ultimoElemento", () => {
expect(ex.ultimoElemento([1,2,3])).toBe(3)
})

test("tamanhoArray", () => {
expect(ex.tamanhoArray([1,2,3,4])).toBe(4)
})

test("adicionarDez", () => {
expect(ex.adicionarDez([1,2])).toEqual([1,2,10])
})

test("removerUltimo", () => {
expect(ex.removerUltimo([1,2,3])).toEqual([1,2])
})

test("somaArray deterministico", () => {
expect(ex.somaArray([1,2,3])).toBe(6)
})

test("somaArray aleatorio", () => {

for(let i=0;i<20;i++){

let lista = []
let soma = 0

for(let j=0;j<5;j++){
let n = Math.floor(Math.random()*50)
lista.push(n)
soma += n
}

expect(ex.somaArray(lista)).toBe(soma)

}

})

})

describe("OBJETOS", () => {

test("maioridade", () => {
expect(ex.ehMaiorDeIdade({nome:"Ana",idade:20})).toBe(true)
expect(ex.ehMaiorDeIdade({nome:"Ana",idade:16})).toBe(false)
})

test("mensagemMaioridade", () => {
expect(ex.mensagemMaioridade({idade:20})).toBe("maior de idade")
expect(ex.mensagemMaioridade({idade:10})).toBe("menor de idade")
})

test("saudacaoPessoa", () => {
expect(ex.saudacaoPessoa({nome:"Ana",idade:20}))
.toBe("Olá Ana, você é maior de idade")
})

test("desconto aleatorio", () => {

for(let i=0;i<20;i++){

let preco = Math.floor(Math.random()*500)+1

expect(ex.aplicarDesconto({nome:"p",preco}))
.toBeCloseTo(preco*0.9)

}

})

test("situacaoAluno", () => {
expect(ex.situacaoAluno({nota:7})).toBe("aprovado")
expect(ex.situacaoAluno({nota:4})).toBe("reprovado")
})

test("areaRetangulo", () => {
expect(ex.areaRetangulo({largura:5,altura:4})).toBe(20)
})

test("carroNovo", () => {
expect(ex.carroNovo({marca:"a",ano:2020})).toBe(true)
expect(ex.carroNovo({marca:"a",ano:2010})).toBe(false)
})

test("usuarioAtivo", () => {
expect(ex.usuarioAtivo({ativo:true})).toBe(true)
})

test("depositar", () => {
expect(ex.depositar({titular:"Ana",saldo:400}))
.toBe("Novo saldo de Ana: 500")
})

})

describe("ARRAYS DE OBJETOS", () => {

test("nomesAlunos", () => {

const alunos=[
{nome:"Ana",nota:7},
{nome:"Joao",nota:5}
]

expect(ex.nomesAlunos(alunos))
.toEqual(["Ana","Joao"])

})

test("alunosAprovados", () => {

const alunos=[
{nome:"Ana",nota:7},
{nome:"Joao",nota:5}
]

expect(ex.alunosAprovados(alunos))
.toEqual([{nome:"Ana",nota:7}])

})

test("totalProdutos", () => {

const p=[
{nome:"A",preco:10},
{nome:"B",preco:20}
]

expect(ex.totalProdutos(p)).toBe(30)

})

test("produtoMaisCaro", () => {

const p=[
{nome:"A",preco:10},
{nome:"B",preco:50},
{nome:"C",preco:20}
]

expect(ex.produtoMaisCaro(p))
.toEqual({nome:"B",preco:50})

})

})

describe("METODOS DE ARRAY", () => {

test("dobrarNumeros", () => {
expect(ex.dobrarNumeros([1,2,3]))
.toEqual([2,4,6])
})

test("filtrarPares", () => {
expect(ex.filtrarPares([1,2,3,4]))
.toEqual([2,4])
})

test("maioresQueDez", () => {
expect(ex.maioresQueDez([5,20,3,15]))
.toEqual([20,15])
})

test("tamanhoPalavras", () => {
expect(ex.tamanhoPalavras(["a","ab","abc"]))
.toEqual([1,2,3])
})

test("contemCinco", () => {
expect(ex.contemCinco([1,2,5])).toBe(true)
expect(ex.contemCinco([1,2,3])).toBe(false)
})

})
