document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'In the morning he ran straight outside to build a snowman.'
    },
    {
      name: '1',
      img: 'Om morgenen løb han direkte udenfor for at bygge en snemand.'
    },
    {
      name: '2',
      img: 'Dad helped them and at last they had a splendid snowman.'
    },
    {
      name: '2',
      img: 'Far hjalp dem, og til sidst havde de en pragtfuld snemand.'
    },
    {
      name: '3',
      img: 'Tom ran indoors and fetched an old hat for his head and a carrot for his nose.'
    },
    {
      name: '3',
      img: 'Tom løb indendørs og hentede en gammel hat til hovedet og en gulerod til næsen.'
    },
    {
      name: '4',
      img: 'It was getting dark.'
    },
    {
      name: '4',
      img: 'Det var ved at blive mørkt.'
    },
    {
      name: '5',
      img: 'They had a surprise when they went into the living room.'
    },
    {
      name: '5',
      img: 'De havde en overraskelse, da de gik ind i stuen.'
    },
    {
      name: '6',
      img: 'The Chrismas tree was covered in twinkling lights, tinsel and tiny toys.'
    },
    {
      name: '6',
      img: 'Juletræet var dækket af blinkende lys, glimmer og lille legetøj.'
    },
    {
      name: '7',
      img: 'The robin was perched right at the top of the tree.'
    },
    {
      name: '7',
      img: 'Robinen sad lige i toppen af træet.'
    },
    {
      name: '8',
      img: 'It´s not fair.'
    },
    {
      name: '8',
      img: 'Det er ikke fair.'
    },
    {
      name: '9',
      img: 'My angel should be at the top.'
    },
    {
      name: '9',
      img: 'Min engel burde være øverst.'
    },
    {
      name: '10',
      img: 'Kitty strolled into the room and spotted the robin.'
    },
    {
      name: '10',
      img: 'Kitty spadserede ind i rummet og fik øje på robinen.'
    },
    {
      name: '11',
      img: 'At last it was Christmas Eve, the night when Father Christmas comes.'
    },
    {
      name: '11',
      img: 'Endelig var det juleaften, den nat, hvor julemanden kommer.'
    },
    {
      name: '12',
      img: 'Tom went to bed, but he did not want to go to sleep.'
    },
    {
      name: '12',
      img: 'Tom gik i seng, men han ønskede ikke at sove.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/dk/level46.html'> Continue to next level </a>";


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
