document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'They are very dirty and fat but also funny.'
    },
    {
      name: '1',
      img: 'De er meget beskidte og fede, men også sjove.'
    },
    {
      name: '2',
      img: 'They like playing in the mud.'
    },
    {
      name: '2',
      img: 'De kan lide at lege i mudderet.'
    },
    {
      name: '3',
      img: 'The children like playing in the yard.'
    },
    {
      name: '3',
      img: 'Børnene kan lide at lege i gården.'
    },
    {
      name: '4',
      img: 'They are looking forward to making a hut.'
    },
    {
      name: '4',
      img: 'De glæder sig til at lave en hytte.'
    },
    {
      name: '5',
      img: 'They need a hammer, nails and planks.'
    },
    {
      name: '5',
      img: 'De skal bruge en hammer, søm og planker.'
    },
    {
      name: '6',
      img: 'I´d like to help them to hammer the planks.'
    },
    {
      name: '6',
      img: 'Jeg kan godt lide at hjælpe dem med at hamre plankerne.'
    },
    {
      name: '7',
      img: 'Rather help us to hammer the nails.'
    },
    {
      name: '7',
      img: 'Hjælp os hellere med at hamre sømmene.'
    },
    {
      name: '8',
      img: 'How do you like the finished hut?'
    },
    {
      name: '8',
      img: 'Hvordan kan du lide den færdige hytte?'
    },
    {
      name: '9',
      img: 'It´s the best hut ever.'
    },
    {
      name: '9',
      img: 'Det er den bedste hytte nogensinde.'
    },
    {
      name: '10',
      img: 'It´s a lovely hot day.'
    },
    {
      name: '10',
      img: 'Det er en dejlig varm dag.'
    },
    {
      name: '11',
      img: 'The children are at the riverside.'
    },
    {
      name: '11',
      img: 'Børnene er ved flodbredden.'
    },
    {
      name: '12',
      img: 'There is a lot of sand everywhere.'
    },
    {
      name: '12',
      img: 'Der er meget sand overalt.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 18 completed!</h2><a href='https://elaidina.github.io/dk/level19.html'> Continue to Level 19</a>";


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
