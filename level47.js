document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'But Tom soon remembered how to do it.'
    },
    {
      name: '1',
      img: 'Men Tom huskede hurtigt, hvordan man gjorde det.'
    },
    {
      name: '2',
      img: 'I like our tent best.'
    },
    {
      name: '2',
      img: 'Jeg kan bedst lide vores telt.'
    },
    {
      name: '3',
      img: 'I went to fetch water.'
    },
    {
      name: '3',
      img: 'Jeg gik for at hente vand.'
    },
    {
      name: '4',
      img: 'After supper, Tom went to explore the wood.'
    },
    {
      name: '4',
      img: 'Efter aftensmaden gik Tom for at udforske skoven.'
    },
    {
      name: '5',
      img: 'Somebody has been painting arrows on the trees.'
    },
    {
      name: '5',
      img: 'Nogen har malet pile på træerne.'
    },
    {
      name: '6',
      img: 'If we follow those arrows, they will take us for a good walk and bring us back to camp.'
    },
    {
      name: '6',
      img: 'Hvis vi følger disse pile, vil de tage os en god tur og bringe os tilbage til lejren.'
    },
    {
      name: '7',
      img: 'The big boys were very noisy.'
    },
    {
      name: '7',
      img: 'De store drenge var meget støjende.'
    },
    {
      name: '8',
      img: 'Let´s go and play inside our tent.'
    },
    {
      name: '8',
      img: 'Lad os gå og lege inde i vores telt.'
    },
    {
      name: '9',
      img: 'It´s time you two got into your sleeping bags.'
    },
    {
      name: '9',
      img: 'Det er på tide, at I to kommer i jeres soveposer.'
    },
    {
      name: '10',
      img: 'Tom was almost asleep in his cosy sleeping bag when something hit his tent.'
    },
    {
      name: '10',
      img: 'Tom sov næsten i sin hyggelige sovepose, da noget ramte hans telt.'
    },
    {
      name: '11',
      img: 'It gave him a fright.'
    },
    {
      name: '11',
      img: 'Det gav ham en forskrækkelse.'
    },
    {
      name: '12',
      img: 'Ti zlobiví kluci tvrdě kopli fotbalový míč do Tomova stanu.'
    },
    {
      name: '12',
      img: 'De frække drenge havde sparket en fodbold hårdt mod Toms telt.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/dk/level48.html'> Continue to next level </a>";


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
