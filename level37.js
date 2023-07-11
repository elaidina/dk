document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'It was time for Tom to go shopping.'
    },
    {
      name: '1',
      img: 'Det var tid for Tom til at shoppe.'
    },
    {
      name: '2',
      img: 'While I was sitting in the waiting room, she was reading comics.'
    },
    {
      name: '2',
      img: 'Mens jeg sad i venteværelset, læste hun tegneserier.'
    },
    {
      name: '3',
      img: 'The door opened and out came the president.'
    },
    {
      name: '3',
      img: 'Døren åbnede sig, og præsidenten kom ud.'
    },
    {
      name: '4',
      img: 'Tom smiled to me.'
    },
    {
      name: '4',
      img: 'Tom smilede til mig.'
    },
    {
      name: '5',
      img: 'Why do you have to wear a brace on your teeth?'
    },
    {
      name: '5',
      img: 'Hvorfor skal du have bøjle på tænderne?'
    },
    {
      name: '6',
      img: 'To make my teeth straight.'
    },
    {
      name: '6',
      img: 'At gøre mine tænder lige.'
    },
    {
      name: '7',
      img: 'Laura is ready to see you now.'
    },
    {
      name: '7',
      img: 'Laura er klar til at se dig nu.'
    },
    {
      name: '8',
      img: 'This is a nice clean smell.'
    },
    {
      name: '8',
      img: 'Dette er en dejlig ren lugt.'
    },
    {
      name: '9',
      img: 'Who wants to go first?'
    },
    {
      name: '9',
      img: 'Hvem vil gå først?'
    },
    {
      name: '10',
      img: 'Tom climbed into the dentist´s chair.'
    },
    {
      name: '10',
      img: 'Tom kravlede op i tandlægestolen.'
    },
    {
      name: '11',
      img: 'Mrs White pressed a button and the chair tilted back.'
    },
    {
      name: '11',
      img: 'Mrs White trykkede på en knap, og stolen vippede tilbage.'
    },
    {
      name: '12',
      img: 'Tom felt like a rocket pilot.'
    },
    {
      name: '12',
      img: 'Tom følte sig som en raketpilot.'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

 


  function createBoard() {
    cardArray.forEach (function (item, i ) {
      const cardd = document.createElement('div')
      cardd.setAttribute('class', "box")
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')

      const cardtext = document.createElement('h5')
      cardtext.textContent = item.img
      cardd.setAttribute('data-id', i)
      cardd.addEventListener('click', flipCard)
      cardd.appendChild(card)
      grid.appendChild(cardd)
      cardd.appendChild(cardtext)
    })
  }  

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
     if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')

cards[optionOneId].parentElement.classList.remove("green")
      

      

      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      var audio = new Audio ("images/sound.mp3")
audio.play();
      // alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
      cards[optionOneId].parentElement.setAttribute('class', 'hide')
      cards[optionTwoId].parentElement.setAttribute('class', 'hide')

    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      cards[optionOneId].parentElement.classList.remove("green")
      cards[optionTwoId].parentElement.classList.remove("green")
      var audio1 = new Audio ("images/nothing.mp3")
audio1.play();
      // alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/dk/level38.html'> Continue to next level </a>";


      var audio3 = new Audio ("images/end.mp3")
audio3.play();
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    
    this.classList.add("green")
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
    
  }

  createBoard()
})
