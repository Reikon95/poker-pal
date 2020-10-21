import { OnInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  templateUrl: './hand-simulator.html',
  styleUrls: ['./hand-simulator.scss'],
})
export class HandSimulatorComponent implements OnInit {
  cards = {
    hearts: {
      2: { dealt: false, name: '2', filename: '../../assets/cards/2H.svg' },
      3: { dealt: false, name: '3', filename: '../../assets/cards/3H.svg' },
      4: { dealt: false, name: '4', filename: '../../assets/cards/4H.svg' },
      5: { dealt: false, name: '5', filename: '../../assets/cards/5H.svg' },
      6: { dealt: false, name: '6', filename: '../../assets/cards/6H.svg' },
      7: { dealt: false, name: '7', filename: '../../assets/cards/7H.svg' },
      8: { dealt: false, name: '8', filename: '../../assets/cards/8H.svg' },
      9: { dealt: false, name: '9', filename: '../../assets/cards/9H.svg' },
      10: { dealt: false, name: '10', filename: '../../assets/cards/10H.svg' },
      11: { dealt: false, name: 'Jack', filename: '../../assets/cards/JH.svg' },
      12: {
        dealt: false,
        name: 'Queen',
        filename: '../../assets/cards/QH.svg',
      },
      13: { dealt: false, name: 'King', filename: '../../assets/cards/KH.svg' },
      14: { dealt: false, name: 'Ace', filename: '../../assets/cards/AH.svg' },
    },
    spades: {
      2: { dealt: false, name: '2', filename: '../../assets/cards/2S.svg' },
      3: { dealt: false, name: '3', filename: '../../assets/cards/3S.svg' },
      4: { dealt: false, name: '4', filename: '../../assets/cards/4S.svg' },
      5: { dealt: false, name: '5', filename: '../../assets/cards/5S.svg' },
      6: { dealt: false, name: '6', filename: '../../assets/cards/6S.svg' },
      7: { dealt: false, name: '7', filename: '../../assets/cards/7S.svg' },
      8: { dealt: false, name: '8', filename: '../../assets/cards/8S.svg' },
      9: { dealt: false, name: '9', filename: '../../assets/cards/9S.svg' },
      10: { dealt: false, name: '10', filename: '../../assets/cards/10S.svg' },
      11: { dealt: false, name: 'Jack', filename: '../../assets/cards/JS.svg' },
      12: {
        dealt: false,
        name: 'Queen',
        filename: '../../assets/cards/QS.svg',
      },
      13: { dealt: false, name: 'King', filename: '../../assets/cards/KS.svg' },
      14: { dealt: false, name: 'Ace', filename: '../../assets/cards/AS.svg' },
    },
    diamonds: {
      2: { dealt: false, name: '2', filename: '../../assets/cards/2D.svg' },
      3: { dealt: false, name: '3', filename: '../../assets/cards/3D.svg' },
      4: { dealt: false, name: '4', filename: '../../assets/cards/4D.svg' },
      5: { dealt: false, name: '5', filename: '../../assets/cards/5D.svg' },
      6: { dealt: false, name: '6', filename: '../../assets/cards/6D.svg' },
      7: { dealt: false, name: '7', filename: '../../assets/cards/7D.svg' },
      8: { dealt: false, name: '8', filename: '../../assets/cards/8D.svg' },
      9: { dealt: false, name: '9', filename: '../../assets/cards/9D.svg' },
      10: { dealt: false, name: '10', filename: '../../assets/cards/10D.svg' },
      11: { dealt: false, name: 'Jack', filename: '../../assets/cards/JD.svg' },
      12: {
        dealt: false,
        name: 'Queen',
        filename: '../../assets/cards/QD.svg',
      },
      13: { dealt: false, name: 'King', filename: '../../assets/cards/KD.svg' },
      14: { dealt: false, name: 'Ace', filename: '../../assets/cards/AD.svg' },
    },
    clubs: {
      2: { dealt: false, name: '2', filename: '../../assets/cards/2C.svg' },
      3: { dealt: false, name: '3', filename: '../../assets/cards/3C.svg' },
      4: { dealt: false, name: '4', filename: '../../assets/cards/4C.svg' },
      5: { dealt: false, name: '5', filename: '../../assets/cards/5C.svg' },
      6: { dealt: false, name: '6', filename: '../../assets/cards/6C.svg' },
      7: { dealt: false, name: '7', filename: '../../assets/cards/7C.svg' },
      8: { dealt: false, name: '8', filename: '../../assets/cards/8C.svg' },
      9: { dealt: false, name: '9', filename: '../../assets/cards/9C.svg' },
      10: { dealt: false, name: '10', filename: '../../assets/cards/10C.svg' },
      11: { dealt: false, name: 'Jack', filename: '../../assets/cards/JC.svg' },
      12: {
        dealt: false,
        name: 'Queen',
        filename: '../../assets/cards/QC.svg',
      },
      13: { dealt: false, name: 'King', filename: '../../assets/cards/KC.svg' },
      14: { dealt: false, name: 'Ace', filename: '../../assets/cards/AC.svg' },
    },
  };

  communityCards = [];

  userPlayer = [];

  otherPlayers = [];

  allPlayers = [...this.userPlayer, ...this.otherPlayers];

  ngOnInit(): void {}

  // create a hand for each player, deal these first
  // then deal community cards

  constructor() {}

  createPlayers(numberOfPlayers = 6) {
    if (numberOfPlayers > 8 || numberOfPlayers < 2) {
      console.log('error');
      return null;
    }
    for (let i = 0; i > numberOfPlayers; i++) {
      const player = {};
      this.otherPlayers.push(player);
    }
  }

  dealAllCommunityCards() {
    this.communityCards = [];
    for (let i = 0; i < 5; i++) {
      this.communityCards.push(this.findRandomCard());
    }
  }

  dealYourCards() {
    const yourCards = [];
    yourCards.push(this.findRandomCard());
    yourCards.push(this.findRandomCard());
  }

  dealCards() {
    for (const player of this.otherPlayers) {
      let cardFound1 = false;

      while (!cardFound1) {
        let x = this.findRandomCard();
        if (x) {
          cardFound1 = true;
          player.card1 = x;
        }
        //retry??
      }
    }

    for (let i = 0; i > 5; i++) {
      this.communityCards.push(this.findRandomCard());
    }
  }

  findRandomCard() {
    const suitsArray = ['hearts', 'spades', 'clubs', 'diamonds'];
    const cardsArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    const suit = suitsArray[Math.floor(Math.random() * Math.floor(4))];
    const card = cardsArray[Math.floor(Math.random() * Math.floor(13))];
    // return suit + ' ' + this.cards[suit][card].name;
    return this.cards[suit][card];
  }

  getKeyByValue(object, value) {
    console.log(object, value);
    return Object.keys(object).find((key) => object[key] === value);
  }
}
