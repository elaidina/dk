document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'They are looking forward to see their grandma.'
    },
    {
      name: '1',
      img: 'De glæder sig til at se deres bedstemor.'
    },
    {
      name: '2',
      img: 'Her village is not far from the town.'
    },
    {
      name: '2',
      img: 'Hendes landsby ligger ikke langt fra byen.'
    },
    {
      name: '3',
      img: 'We are coming along with them.'
    },
    {
      name: '3',
      img: 'Vi kommer sammen med dem.'
    },
    {
      name: '4',
      img: 'Can you wait for us?'
    },
    {
      name: '4',
      img: 'Kan du vente på os?'
    },
    {
      name: '5',
      img: 'I must ask everyone.'
    },
    {
      name: '5',
      img: 'Jeg må spørge alle.'
    },
    {
      name: '6',
      img: 'We will be going through the town.'
    },
    {
      name: '6',
      img: 'Vi vil gå gennem byen.'
    },
    {
      name: '7',
      img: 'We will be able to see lots of cars, shops and big houses.'
    },
    {
      name: '7',
      img: "Vi vil kunne se masser af biler, butikker og store huse."
    },
    {
      name: '8',
      img: 'There are lots of people in the streets.'
    },
    {
      name: '8',
      img: 'Der er mange mennesker i gaderne.'
    },
    {
      name: '9',
      img: 'Show me the way, please.'
    },
    {
      name: '9',
      img: 'Vis mig vejen, tak.'
    },
    {
      name: '10',
      img: "Go straight and then turn left."
    },
    {
      name: '10',
      img: 'Gå ligeud og drej så til venstre.'
    },
    {
      name: '11',
      img: "Turn right at the giant bridge."
    },
    {
      name: '11',
      img: 'Drej til højre ved den gigantiske bro.'
    },
    {
      name: '12',
      img: 'There´s my favourite shop on the right and a church on the left.'
    },
    {
      name: '12',
      img: 'Der er min yndlingsbutik til højre og en kirke til venstre.'
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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 16 completed!</h2><a href="https://elaidina.github.io/dk/level17.html"> Continue to Level 17</a>'


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
