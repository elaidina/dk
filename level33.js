document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Dad came to catch us in his car.'
    },
    {
      name: '1',
      img: 'Far kom for at fange os i sin bil.'
    },
    {
      name: '2',
      img: 'He put us in our safety seats and fastened our safety belts.'
    },
    {
      name: '2',
      img: 'Han satte os i vores sikkerhedssæder og spændte vores sikkerhedsseler.'
    },
    {
      name: '3',
      img: 'Have you enjoyed yourself?'
    },
    {
      name: '3',
      img: 'Har du hygget dig?'
    },
    {
      name: '4',
      img: 'I saved Tom´s life.'
    },
    {
      name: '4',
      img: 'Jeg reddede Toms liv.'
    },
    {
      name: '5',
      img: 'Well done.'
    },
    {
      name: '5',
      img: 'Godt klaret.'
    },
    {
      name: '6',
      img: 'Turn the page.'
    },
    {
      name: '6',
      img: 'Vend nu siden.'
    },
    {
      name: '7',
      img: 'Help me solve the puzzle.'
    },
    {
      name: '7',
      img: 'Hjælp mig med at løse puslespillet.'
    },
    {
      name: '8',
      img: 'Point to the things that could be dangerous.'
    },
    {
      name: '8',
      img: 'Peg på de ting, der kunne være farlige.'
    },
    {
      name: '9',
      img: 'This is a haunted house.'
    },
    {
      name: '9',
      img: 'Dette er et hjemsøgt hus.'
    },
    {
      name: '10',
      img: 'Once there was a girl.'
    },
    {
      name: '10',
      img: 'Der var engang en pige.'
    },
    {
      name: '11',
      img: 'She went to live in this big old house.'
    },
    {
      name: '11',
      img: 'Hun gik for at bo i dette store gamle hus.'
    },
    {
      name: '12',
      img: 'It was a splendid place.'
    },
    {
      name: '12',
      img: 'Det var et fantastisk sted.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/dk/level34.html'> Continue to next level </a>";


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
