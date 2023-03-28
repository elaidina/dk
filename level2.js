document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'No, I haven´t'
    },
    {
      name: '1',
      img: "Nej, det har jeg ikke."
    },
    {
      name: '2',
      img: 'The sun is shining and it´s warm.'
    },
    {
      name: '2',
      img: "Solen skinner og det er varmt."
    },
    {
      name: '3',
      img: 'What would you like to do?'
    },
    {
      name: '3',
      img: "Hvad vil du gerne lave?"
    },
    {
      name: '4',
      img: 'I would like to go out.'
    },
    {
      name: '4',
      img: "Jeg vil gerne ud."
    },
    {
      name: '5',
      img: 'Excuse me, who are you?'
    },
    {
      name: '5',
      img: "Undskyld mig, hvem er du?"
    },
    {
      name: '6',
      img: 'Hello, my name is Tom.'
    },
    {
      name: '6',
      img: "Hej, jeg hedder Tom."
    },
    {
      name: '7',
      img: 'Is Tom a good friend?'
    },
    {
      name: '7',
      img: "Er Tom en god ven?"
    },
    {
      name: '8',
      img: "Ne. Není."
    },
    {
      name: '8',
      img: 'Nej. Han er ikke.'
    },
    {
      name: '9',
      img: 'That tall boy is my friend.'
    },
    {
      name: '9',
      img: "Den høje dreng er min ven."
    },
    {
      name: '10',
      img: 'Come here and sit down.'
    },
    {
      name: '10',
      img: "Kom her og sæt dig ned."
    },
    {
      name: '11',
      img: 'Michelle, lend me your pen, please.'
    },
    {
      name: '11',
      img: "Michelle, lån mig venligst din pen."
    },
    {
      name: '12',
      img: 'Let´s play with a ball.'
    },
    {
      name: '12',
      img: "Lad os lege med en bold."
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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 2 completed!</h2><a href="https://elaidina.github.io/dk/level3.html"> Continue to Level 3</a>'


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
