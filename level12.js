document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: "I´ll make a tea for you."
    },
    {
      name: '1',
      img: 'Jeg laver en te til dig.'
    },
    {
      name: '2',
      img: "He´s got a sore throat and a headache."
    },
    {
      name: '2',
      img: 'Han har ondt i halsen og hovedpine.'
    },
    {
      name: '3',
      img: 'They all have a tummy-ache.'
    },
    {
      name: '3',
      img: 'De har alle ondt i maven.'
    },
    {
      name: '4',
      img: "What´s the matter with me?"
    },
    {
      name: '4',
      img: 'Hvad er der i vejen med mig?'
    },
    {
      name: '5',
      img: 'We must stay at home.'
    },
    {
      name: '5',
      img: 'Vi skal blive hjemme.'
    },
    {
      name: '6',
      img: "I don´t want to catch a cold."
    },
    {
      name: '6',
      img: 'Jeg vil ikke blive forkølet.'
    },
    {
      name: '7',
      img: 'I keep eating a lot of fruits and vegetables and drinking warm tea with lemon and honey.'
    },
    {
      name: '7',
      img: 'Jeg bliver ved med at spise en masse frugt og grøntsager og drikke varm te med citron og honning.'
    },
    {
      name: '8',
      img: 'Wipe your nose with a hanky.'
    },
    {
      name: '8',
      img: 'Tør din næse med en hanky.'
    },
    {
      name: '9',
      img: 'Come along with me.'
    },
    {
      name: '9',
      img: 'Kom sammen med mig.'
    },
    {
      name: '10',
      img: 'You can help me if you like.'
    },
    {
      name: '10',
      img: 'Du kan hjælpe mig, hvis du vil.'
    },
    {
      name: '11',
      img: 'She will come back in the afternoon.'
    },
    {
      name: '11',
      img: 'Hun kommer tilbage om eftermiddagen.'
    },
    {
      name: '12',
      img: 'I want to watch TV in the evening.'
    },
    {
      name: '12',
      img: "Jeg vil se tv om aftenen."
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 12 completed!</h2><a href='https://elaidina.github.io/dk/level13.html'> Continue to Level 13</a>";


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
