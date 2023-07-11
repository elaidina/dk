document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'I would like to pick som flowers for my mum.'
    },
    {
      name: '1',
      img: 'Jeg vil gerne plukke nogle blomster til min mor.'
    },
    {
      name: '2',
      img: 'The apples are ripe and round.'
    },
    {
      name: '2',
      img: 'Æblerne er modne og runde.'
    },
    {
      name: '3',
      img: 'I found a lot of presents under the Christmas tree.'
    },
    {
      name: '3', 
      img: 'Jeg fandt en masse gaver under juletræet.'
    },
    {
      name: '4',
      img: 'I don ´t like ironing.'
    },
    {
      name: '4',
      img: 'Jeg kan ikke lide at stryge.'
    },
    {
      name: '5',
      img: 'I am too busy today.'
    },
    {
      name: '5',
      img: 'Jeg har for travlt i dag.'
    },
    {
      name: '6',
      img: 'Look around you.'
    },
    {
      name: '6',
      img: 'Se dig omkring.'
    },
    {
      name: '7',
      img: 'How many interesting things can you see?'
    },
    {
      name: '7',
      img: 'Hvor mange interessante ting kan du se?'
    },
    {
      name: '8',
      img: 'I know lots of people, animals, houses, trees and flowers.'
    },
    {
      name: '8',
      img: 'Jeg kender masser af mennesker, dyr, huse, træer og blomster.'
    },
    {
      name: '9',
      img: 'But do you know everything?'
    },
    {
      name: '9',
      img: 'Men ved du alt?'
    },
    {
      name: '10',
      img: 'Nobody knows everything.'
    },
    {
      name: '10',
      img: 'Ingen ved alt.'
    },
    {
      name: '11',
      img: 'Some adults know a lot of songs for children.'
    },
    {
      name: '11',
      img: 'Nogle voksne kan mange sange for børn.'
    },
    {
      name: '12',
      img: 'Some people cannot repair cars.'
    },
    {
      name: '12',
      img: "Nogle mennesker kan ikke reparere biler."
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 20 completed!</h2><a href='https://elaidina.github.io/dk/level21.html'> Continue to Level 21</a>";


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
