document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'The floor and the walls are wet.'
    },
    {
      name: '1',
      img: 'Gulvet og væggene er våde.'
    },
    {
      name: '2',
      img: 'She never obeys.'
    },
    {
      name: '2',
      img: 'Hun adlyder aldrig.'
    },
    {
      name: '3',
      img: 'Grandpa has to pull out a giant turnip.'
    },
    {
      name: '3',
      img: 'Bedstefar skal trække en kæmpe majroe frem.'
    },
    {
      name: '4',
      img: 'He pulls and pulls the turnip but he can´t pull it out.'
    },
    {
      name: '4',
      img: 'Han trækker og trækker majroen, men han kan ikke trække den ud.'
    },
    {
      name: '5',
      img: 'He must call his grandson.'
    },
    {
      name: '5',
      img: 'Han skal ringe til sit barnebarn.'
    },
    {
      name: '6',
      img: 'They pull until the turnip comes out.'
    },
    {
      name: '6',
      img: 'De trækker, indtil majroen kommer ud.'
    },
    {
      name: '7',
      img: 'They all fall on the ground and laugh.'
    },
    {
      name: '7',
      img: 'De falder alle sammen på jorden og griner.'
    },
    {
      name: '8',
      img: 'Why can´t animals speak?'
    },
    {
      name: '8',
      img: 'Hvorfor kan dyr ikke tale?'
    },
    {
      name: '9',
      img: 'They can but we don´t understand them.'
    },
    {
      name: '9',
      img: 'Det kan de, men vi forstår dem ikke.'
    },
    {
      name: '10',
      img: 'That hen is telling stories to her chicks.'
    },
    {
      name: '10',
      img: 'Den høne fortæller historier til sine unger.'
    },
    {
      name: '11',
      img: 'What is the story about?'
    },
    {
      name: '11',
      img: 'Hvad handler historien om?'
    },
    {
      name: '12',
      img: 'Tell me the story, please.'
    },
    {
      name: '12',
      img: 'Fortæl mig historien, tak.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 26 completed!</h2><a href='https://elaidina.github.io/dk/level27.html'> Continue to Level 27</a>";


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
