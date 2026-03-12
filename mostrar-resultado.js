const r = require("./result.json")

console.log("=================================")
console.log("RESULTADO DOS EXERCÍCIOS")
console.log("=================================")

r.testResults.forEach(testFile => {

  testFile.assertionResults.forEach(test => {

    const nome = test.ancestorTitles[0]

    if (test.status === "passed") {
      console.log(nome + " ✔")
    } else {
      console.log(nome + " ✘")
    }

  })

})

console.log("=================================")
