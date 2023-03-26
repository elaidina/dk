document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'He says that I put more fruit in my tummy than in the basket.'
    },
    {
      name: '1',
      img: 'Říká, že si dávám více ovoce do bříška než do košíku.'
    },
    {
      name: '2',
      img: 'In winter Grandpa makes a bird-house and hangs it in the tree.'
    },
    {
      name: '2',
      img: 'V zimě děda udělá budku pro ptáky a pověsí ji na strom.'
    },
    {
      name: '3',
      img: 'He puts some food there, so that the birds are not hungry in the cold winter.'
    },
    {
      name: '3',
      img: 'Dává tam nějaké jídlo, aby ptáci neměli hlad v chladné zimě.'
    },
    {
      name: '4',
      img: 'We must protect them bacause they help us.'
    },
    {
      name: '4',
      img: 'Musíme je chránit, protože nám pomáhají.'
    },
    {
      name: '5',
      img: 'They eat insects.'
    },
    {
      name: '5',
      img: 'Jedí hmyz.'
    },
    {
      name: '6',
      img: 'Some insects can damage the plants.'
    },
    {
      name: '6',
      img: 'Některý hmyz může poškodit rostliny.'
    },
    {
      name: '7',
      img: 'Why don´t we have ice-cream for breakfast?'
    },
    {
      name: '7',
      img: 'Proč si nedáme k snídani zmrzlinu?'
    },
    {
      name: '8',
      img: 'It´s snowing and cold wind is blowing.'
    },
    {
      name: '8',
      img: 'Sněží a fouká studený vítr.'
    },
    {
      name: '9',
      img: 'The tea is too bitter.'
    },
    {
      name: '9',
      img: 'Čaj je příliš hořký.'
    },
    {
      name: '10',
      img: 'Lemon juice makes it more sour.'
    },
    {
      name: '10',
      img: 'Citrónová šťáva to udělá kyselejší.'
    },
    {
      name: '11',
      img: 'I eat my breakfast up and go out.'
    },
    {
      name: '11',
      img: 'Sním snídani a jdu ven.'
    },
    {
      name: '12',
      img: 'The ice is slippery.'
    },
    {
      name: '12',
      img: 'Led je kluzký.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 24 completed!</h2><a href='https://elaidina.github.io/dk/level25.html'> Continue to Level 25</a>";


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
