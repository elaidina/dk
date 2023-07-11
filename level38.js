document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'She put a disposable mask over her nose and mouth.'
    },
    {
      name: '1',
      img: 'Hun lagde en engangsmaske over sin næse og mund.'
    },
    {
      name: '2',
      img: 'What´s that for?'
    },
    {
      name: '2',
      img: 'Hvad er det til?'
    },
    {
      name: '3',
      img: 'So that I don´t breathe over you.'
    },
    {
      name: '3',
      img: 'Så jeg ikke trækker vejret over dig.'
    },
    {
      name: '4',
      img: 'It´s your turn now.'
    },
    {
      name: '4',
      img: 'Det er din tur nu.'
    },
    {
      name: '5',
      img: 'She found a little hole in one of Tom´s teeth.'
    },
    {
      name: '5',
      img: 'Hun fandt et lille hul i en af Toms tænder.'
    },
    {
      name: '6',
      img: 'I will clean that hole and put a filling in it.'
    },
    {
      name: '6',
      img: 'Jeg vil rense det hul og fylde en fyldning i det.'
    },
    {
      name: '7',
      img: 'It will stop pieces of food getting in and turning nasty.'
    },
    {
      name: '7',
      img: 'Det vil forhindre, at stykker mad kommer ind og bliver grimme.'
    },
    {
      name: '8',
      img: 'The sucking tube in Tom´s mouth made funny sucking noises.'
    },
    {
      name: '8',
      img: 'Sutterøret i Toms mund lavede sjove suttelyde.'
    },
    {
      name: '9',
      img: 'Then she used a whizzy drill to clean out the hole in Tom´s tooth.'
    },
    {
      name: '9',
      img: 'Så brugte hun en snæver boremaskine til at rense hullet i Toms tand.'
    },
    {
      name: '10',
      img: 'The nurse gave Tom a glass of pink water to rinse his mouth.'
    },
    {
      name: '10',
      img: 'Sygeplejersken gav Tom et glas pink vand for at skylle hendes mund.'
    },
    {
      name: '11',
      img: 'The dentist dried the hole with a little air blower, so that the filling would stick tight inside.'
    },
    {
      name: '11',
      img: 'Tandlægen tørrede hullet med en lille luftblæser, så fyldet skulle sidde tæt inde.'
    },
    {
      name: '12',
      img: 'The nurse mixed a tiny bit of silver filling.'
    },
    {
      name: '12',
      img: 'Sygeplejersken blandede en lille smule sølvfyld.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/dk/level39.html'> Continue to next level </a>";


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
