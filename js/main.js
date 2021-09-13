const form = document.querySelector('.form')

form.addEventListener('submit', function (event) {
  event.preventDefault()
  const inputStudentName = document.querySelector('#student-name')

  const inputFirstBimester = event.target.querySelector('#first-bimester') //event.target vai informar o elemento que está recebendo o evento
  const inputSecondBimester = event.target.querySelector('#second-bimester')
  const inputThirdBimester = event.target.querySelector('#third-bimester')
  const inputFourthBimester = event.target.querySelector('#fourth-bimester')

  /*pegando o VALOR MESMO */
  const studentName = String(inputStudentName.value)
  const firstBimester = Number(inputFirstBimester.value)
  const secondBimester = Number(inputSecondBimester.value)
  const thirdBimester = Number(inputThirdBimester.value)
  const fourthBimester = Number(inputFourthBimester.value)

  if (!firstBimester || !secondBimester || !thirdBimester || !fourthBimester) {
    setResult('Nota inválida!', false)
    return
  }

  const average = getAverage(
    firstBimester,
    secondBimester,
    thirdBimester,
    fourthBimester
  )
  const situation = getSituation(average)
  const message = `Aluno(a) ${studentName} foi ${situation} com média final de ${average} pontos.`
  setResult(message, true)
})

function getSituation(average) {
  const situation = ['APROVADO(A)', 'REPROVADO(A)']
  if (average >= 6) return situation[0]
  if (average < 6) return situation[1]
}

function getAverage(firstGrade, secondGrade, thirdGrade, fourthGrade) {
  const average = (firstGrade + secondGrade + thirdGrade + fourthGrade) / 4
  return average.toFixed(1)
}

function createP() {
  const p = document.createElement('p')
  return p
}

function setResult(message, isValid) {
  const result = document.querySelector('.result')
  result.innerHTML = ''

  const p = createP()

  if (isValid) {
    p.classList.add('result-paragraph')
  } else {
    p.classList.add('bad')
  }

  p.innerHTML = message
  result.appendChild(p)
}
