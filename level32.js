document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Don´t stand near the cooker.'
    },
    {
      name: '1',
      img: 'Stå ikke i nærheden af komfuret.'
    },
    {
      name: '2',
      img: 'It is very hot and you might burn yourself.'
    },
    {
      name: '2',
      img: 'Det er meget varmt, og du kan brænde dig selv.'
    },
    {
      name: '3',
      img: 'Oh no, I have spilt my milk.'
    },
    {
      name: '3',
      img: 'Åh nej, jeg har spildt min mælk.'
    },
    {
      name: '4',
      img: 'Tom went to fetch a mop from the cleaning cupboard.'
    },
    {
      name: '4',
      img: 'Tom gik for at hente en moppe fra rengøringsskabet.'
    },
    {
      name: '5',
      img: 'Inside the cupboard were all the things we need to keep the house clean.'
    },
    {
      name: '5',
      img: 'Inde i skabet var alle de ting, vi skal bruge for at holde huset rent.'
    },
    {
      name: '6',
      img: 'What a lot of bottles!'
    },
    {
      name: '6',
      img: 'Sikke mange flasker!'
    },
    {
      name: '7',
      img: 'I keep the cupboard door locked.'
    },
    {
      name: '7',
      img: 'Jeg holder skabslågen låst.'
    },
    {
      name: '8',
      img: 'After tea we watched a film on TV.'
    },
    {
      name: '8',
      img: 'Efter te så vi en film på tv.'
    },
    {
      name: '9',
      img: 'The cat played on the floor.'
    },
    {
      name: '9',
      img: 'Katten legede på gulvet.'
    },
    {
      name: '10',
      img: 'The cat has a tiny toy.'
    },
    {
      name: '10',
      img: 'Katten har et lille legetøj.'
    },
    {
      name: '11',
      img: 'Spit it out!'
    },
    {
      name: '11',
      img: 'Spyt det ud!'
    },
    {
      name: '12',
      img: 'You could swallow it and choke.'
    },
    {
      name: '12',
      img: 'Du kunne sluge det og blive kvalt.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 32 completed!</h2><a href='https://elaidina.github.io/dk/level33.html'> Continue to Level 33</a>";


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
