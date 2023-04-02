document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'The little witch began to feel very tired after her hard work.'
    },
    {
      name: '1',
      img: 'Den lille heks begyndte at føle sig meget træt efter sit hårde arbejde.'
    },
    {
      name: '2',
      img: 'They all lived happily ever after.'
    },
    {
      name: '2',
      img: 'De levede alle lykkeligt til deres dages ende.'
    },
    {
      name: '3',
      img: 'Look up and look down.'
    },
    {
      name: '3',
      img: 'Se op og se ned.'
    },
    {
      name: '4',
      img: 'There is a leak in the roof.'
    },
    {
      name: '4',
      img: 'Der er en utæthed i taget.'
    },
    {
      name: '5',
      img: 'It´s easy to repair.'
    },
    {
      name: '5',
      img: 'Det er nemt at reparere.'
    },
    {
      name: '6',
      img: 'But how can you reach up there?'
    },
    {
      name: '6',
      img: 'Men hvordan kan du nå derop?'
    },
    {
      name: '7',
      img: 'I can´t climb up.'
    },
    {
      name: '7',
      img: 'Jeg kan ikke klatre op.'
    },
    {
      name: '8',
      img: 'It is much too steep.'
    },
    {
      name: '8',
      img: 'Den er alt for stejl.'
    },
    {
      name: '9',
      img: 'I have to borrow a ladder.'
    },
    {
      name: '9',
      img: 'Jeg skal låne en stige.'
    },
    {
      name: '10',
      img: 'The kid hops over the puddles and trips.'
    },
    {
      name: '10',
      img: 'Knægten hopper over vandpytterne og tripper.'
    },
    {
      name: '11',
      img: 'She explains how the rain dripped in her tea.'
    },
    {
      name: '11',
      img: 'Hun forklarer, hvordan regnen dryppede i hendes te.'
    },
    {
      name: '12',
      img: 'My window won´t close.'
    },
    {
      name: '12',
      img: 'Mit vindue lukker ikke.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/dk/level36.html'> Continue to next level </a>";


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
