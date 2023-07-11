document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'They searched through a box of glittering decorations.'
    },
    {
      name: '1',
      img: 'De søgte gennem en kasse med glitrende dekorationer.'
    },
    {
      name: '2',
      img: 'Tom found a little angel for the top of the tree.'
    },
    {
      name: '2',
      img: 'Tom fandt en lille engel til toppen af træet.'
    },
    {
      name: '3',
      img: 'You are very helpful.'
    },
    {
      name: '3',
      img: 'Du er meget hjælpsom.'
    },
    {
      name: '4',
      img: 'There is a special someone waiting to meet you before we go home.'
    },
    {
      name: '4',
      img: 'Der er en speciel person, der venter på at møde dig, før vi tager hjem.'
    },
    {
      name: '5',
      img: 'The little wooden house was covered with snow.'
    },
    {
      name: '5',
      img: 'Det lille træhus var dækket af sne.'
    },
    {
      name: '6',
      img: 'Do come in and meet Father Christmas.'
    },
    {
      name: '6',
      img: 'Kom ind og mød julemanden.'
    },
    {
      name: '7',
      img: 'The lady was dressed as an elf.'
    },
    {
      name: '7',
      img: 'Damen var klædt ud som en alf.'
    },
    {
      name: '8',
      img: 'Have you been good children?'
    },
    {
      name: '8',
      img: 'Har I været gode børn?'
    },
    {
      name: '9',
      img: 'Yes, always.'
    },
    {
      name: '9',
      img: 'Ja, altid.'
    },
    {
      name: '10',
      img: 'Will you come down our chimney with presents on Christmas Eve?'
    },
    {
      name: '10',
      img: 'Vil du komme ned af vores skorsten med gaver juleaften?'
    },
    {
      name: '11',
      img: 'Don´t you worry.'
    },
    {
      name: '11',
      img: 'Bare rolig.'
    },
    {
      name: '12',
      img: 'I will be there.'
    },
    {
      name: '12',
      img: 'Jeg vil være der.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/dk/level44.html'> Continue to next level </a>";


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
