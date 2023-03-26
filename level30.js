document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Her little sister wanted to play too.'
    },
    {
      name: '1',
      img: 'Její malá sestra si chtěla taky hrát.'
    },
    {
      name: '2',
      img: 'She kicked the ball high in the air and Jamie ran after it.'
    },
    {
      name: '2',
      img: 'Vykopla míč vysoko do vzduchu a Jamie se za ním rozběhl.'
    },
    {
      name: '3',
      img: 'Mind the pond, please.'
    },
    {
      name: '3',
      img: 'Dávej pozor na rybník, prosím.'
    },
    {
      name: '4',
      img: 'Unfortunatelly the ball rolled into a flower bed and we ran to find it.'
    },
    {
      name: '4',
      img: 'Bohužel se koule skutálela do záhonu a my jsme ji utíkali najít.'
    },
    {
      name: '5',
      img: 'Something buzzed round my face.'
    },
    {
      name: '5',
      img: 'Něco mi bzučelo kolem obličeje.'
    },
    {
      name: '6',
      img: 'It was a bee.'
    },
    {
      name: '6',
      img: 'Byla to včela.'
    },
    {
      name: '7',
      img: 'When I stay still, it might not sting me.'
    },
    {
      name: '7',
      img: 'Když zůstanu v klidu, nemusí mě to bodnout.'
    },
    {
      name: '8',
      img: 'The bee buzzed off and I was sure.'
    },
    {
      name: '8',
      img: 'Včela odbzučela a já byl v bezpečí.'
    },
    {
      name: '9',
      img: 'Jamie was holding a little red berry.'
    },
    {
      name: '9',
      img: 'Jamie držel malou červenou bobuli.'
    },
    {
      name: '10',
      img: 'You must never eat anything you find in the garden.'
    },
    {
      name: '10',
      img: 'Nikdy nesmíš jíst nic, co najdeš na zahradě.'
    },
    {
      name: '11',
      img: 'It might be poisonous.'
    },
    {
      name: '11',
      img: 'Mohlo by to být jedovaté.'
    },
    {
      name: '12',
      img: 'Jamie opened his mouth to show them that he hadn´t eaten any berries.'
    },
    {
      name: '12',
      img: 'Jamie otevřel ústa, aby jim ukázal, že nejedl žádné bobule.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 30 completed!</h2><a href='https://elaidina.github.io/dk/level31.html'> Continue to Level 31</a>";


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
