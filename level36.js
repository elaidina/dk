document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'It is stuck.'
    },
    {
      name: '1',
      img: 'Den sidder fast.'
    },
    {
      name: '2',
      img: 'He does what he can to close up the gap.'
    },
    {
      name: '2',
      img: 'Han gør, hvad han kan for at lukke hullet op.'
    },
    {
      name: '3',
      img: 'The problem is your glass is too thin.'
    },
    {
      name: '3',
      img: 'Problemet er, at dit glas er for tyndt.'
    },
    {
      name: '4',
      img: 'Go back slowly.'
    },
    {
      name: '4',
      img: 'Kør langsomt tilbage.'
    },
    {
      name: '5',
      img: 'Slow down on the bends.'
    },
    {
      name: '5',
      img: 'Sæt farten ned i svingene.'
    },
    {
      name: '6',
      img: 'He´s going to crash.'
    },
    {
      name: '6',
      img: 'Han kommer til at styrte sammen.'
    },
    {
      name: '7',
      img: 'What a lot of bad luck.'
    },
    {
      name: '7',
      img: 'Sikke en masse uheld.'
    },
    {
      name: '8',
      img: 'If only that rain hadn´t dripped in his tea.'
    },
    {
      name: '8',
      img: 'Hvis bare den regn ikke havde dryppet i hans te.'
    },
    {
      name: '9',
      img: 'He forgot to turn his bath tap off.'
    },
    {
      name: '9',
      img: 'Han glemte at lukke for hans badehane.'
    },
    {
      name: '10',
      img: 'This book belongs to me.'
    },
    {
      name: '10',
      img: 'Denne bog tilhører mig.'
    },
    {
      name: '11',
      img: 'I have to go to the dentist.'
    },
    {
      name: '11',
      img: 'Jeg skal til tandlægen.'
    },
    {
      name: '12',
      img: 'This book belongs to him.'
    },
    {
      name: '12',
      img: 'Denne bog tilhører ham.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/dk/level37.html'> Continue to next level </a>";


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
