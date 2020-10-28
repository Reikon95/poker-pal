import { OnInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  templateUrl: './hand-simulator.html',
  styleUrls: ['./hand-simulator.scss'],
})
export class HandSimulatorComponent implements OnInit {
  cards = {
    h2: { name: '2', filename: '../../assets/cards/2H.svg' },
    h3: { name: '3', filename: '../../assets/cards/3H.svg' },
    h4: { name: '4', filename: '../../assets/cards/4H.svg' },
    h5: { name: '5', filename: '../../assets/cards/5H.svg' },
    h6: { name: '6', filename: '../../assets/cards/6H.svg' },
    h7: { name: '7', filename: '../../assets/cards/7H.svg' },
    h8: { name: '8', filename: '../../assets/cards/8H.svg' },
    h9: { name: '9', filename: '../../assets/cards/9H.svg' },
    h10: { name: '10', filename: '../../assets/cards/10H.svg' },
    h11: { name: 'Jack', filename: '../../assets/cards/JH.svg' },
    h12: { name: 'Queen', filename: '../../assets/cards/QH.svg' },
    h13: { name: 'King', filename: '../../assets/cards/KH.svg' },
    h14: { name: 'Ace', filename: '../../assets/cards/AH.svg' },
    s2: { name: '2', filename: '../../assets/cards/2S.svg' },
    s3: { name: '3', filename: '../../assets/cards/3S.svg' },
    s4: { name: '4', filename: '../../assets/cards/4S.svg' },
    s5: { name: '5', filename: '../../assets/cards/5S.svg' },
    s6: { name: '6', filename: '../../assets/cards/6S.svg' },
    s7: { name: '7', filename: '../../assets/cards/7S.svg' },
    s8: { name: '8', filename: '../../assets/cards/8S.svg' },
    s9: { name: '9', filename: '../../assets/cards/9S.svg' },
    s10: { name: '10', filename: '../../assets/cards/10S.svg' },
    s11: { name: 'Jack', filename: '../../assets/cards/JS.svg' },
    s12: {
      name: 'Queen',
      filename: '../../assets/cards/QS.svg',
    },
    s13: { name: 'King', filename: '../../assets/cards/KS.svg' },
    s14: { name: 'Ace', filename: '../../assets/cards/AS.svg' },

    diamonds: {
      d2: { name: '2', filename: '../../assets/cards/2D.svg' },
      d3: { name: '3', filename: '../../assets/cards/3D.svg' },
      d4: { name: '4', filename: '../../assets/cards/4D.svg' },
      d5: { name: '5', filename: '../../assets/cards/5D.svg' },
      d6: { name: '6', filename: '../../assets/cards/6D.svg' },
      d7: { name: '7', filename: '../../assets/cards/7D.svg' },
      d8: { name: '8', filename: '../../assets/cards/8D.svg' },
      d9: { name: '9', filename: '../../assets/cards/9D.svg' },
      d10: { name: '10', filename: '../../assets/cards/10D.svg' },
      d11: { name: 'Jack', filename: '../../assets/cards/JD.svg' },
      d12: {
        name: 'Queen',
        filename: '../../assets/cards/QD.svg',
      },
      d13: { name: 'King', filename: '../../assets/cards/KD.svg' },
      d14: { name: 'Ace', filename: '../../assets/cards/AD.svg' },
    },

    c2: { name: '2', filename: '../../assets/cards/2C.svg' },
    c3: { name: '3', filename: '../../assets/cards/3C.svg' },
    c4: { name: '4', filename: '../../assets/cards/4C.svg' },
    c5: { name: '5', filename: '../../assets/cards/5C.svg' },
    c6: { name: '6', filename: '../../assets/cards/6C.svg' },
    c7: { name: '7', filename: '../../assets/cards/7C.svg' },
    c8: { name: '8', filename: '../../assets/cards/8C.svg' },
    c9: { name: '9', filename: '../../assets/cards/9C.svg' },
    c10: { name: '10', filename: '../../assets/cards/10C.svg' },
    c11: { name: 'Jack', filename: '../../assets/cards/JC.svg' },
    c12: {
      name: 'Queen',
      filename: '../../assets/cards/QC.svg',
    },
    c13: { name: 'King', filename: '../../assets/cards/KC.svg' },
    c14: { name: 'Ace', filename: '../../assets/cards/AC.svg' },
  };

  availableCards = [];
  assignedCards = [];

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

  dealAllCommunityCards(): void {
    this.communityCards = [];
    for (let i = 0; i < 5; i++) {
      this.communityCards.push(this.findRandomCard());
    }
  }

  dealYourCards(): void {
    const yourCards = [];
    yourCards.push(this.findRandomCard());
    yourCards.push(this.findRandomCard());
  }

  dealCards(): void {
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
