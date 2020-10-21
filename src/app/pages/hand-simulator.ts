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
      2: { dealt: false, name: '2', filename: '2H' },
      3: { dealt: false, name: '3' },
      4: { dealt: false, name: '4' },
      5: { dealt: false, name: '5' },
      6: { dealt: false, name: '6' },
      7: { dealt: false, name: '7' },
      8: { dealt: false, name: '8' },
      9: { dealt: false, name: '9' },
      10: { dealt: false, name: '10' },
      11: { dealt: false, name: 'Jack' },
      12: { dealt: false, name: 'Queen' },
      13: { dealt: false, name: 'King' },
      14: { dealt: false, name: 'Ace' },
    },
    spades: {
      2: { dealt: false, name: '2' },
      3: { dealt: false, name: '3' },
      4: { dealt: false, name: '4' },
      5: { dealt: false, name: '5' },
      6: { dealt: false, name: '6' },
      7: { dealt: false, name: '7' },
      8: { dealt: false, name: '8' },
      9: { dealt: false, name: '9' },
      10: { dealt: false, name: '10' },
      11: { dealt: false, name: 'Jack' },
      12: { dealt: false, name: 'Queen' },
      13: { dealt: false, name: 'King' },
      14: { dealt: false, name: 'Ace' },
    },
    diamonds: {
      2: { dealt: false, name: '2' },
      3: { dealt: false, name: '3' },
      4: { dealt: false, name: '4' },
      5: { dealt: false, name: '5' },
      6: { dealt: false, name: '6' },
      7: { dealt: false, name: '7' },
      8: { dealt: false, name: '8' },
      9: { dealt: false, name: '9' },
      10: { dealt: false, name: '10' },
      11: { dealt: false, name: 'Jack' },
      12: { dealt: false, name: 'Queen' },
      13: { dealt: false, name: 'King' },
      14: { dealt: false, name: 'Ace' },
    },
    clubs: {
      2: { dealt: false, name: '2' },
      3: { dealt: false, name: '3' },
      4: { dealt: false, name: '4' },
      5: { dealt: false, name: '5' },
      6: { dealt: false, name: '6' },
      7: { dealt: false, name: '7' },
      8: { dealt: false, name: '8' },
      9: { dealt: false, name: '9' },
      10: { dealt: false, name: '10' },
      11: { dealt: false, name: 'Jack' },
      12: { dealt: false, name: 'Queen' },
      13: { dealt: false, name: 'King' },
      14: { dealt: false, name: 'Ace' },
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
    return suit + ' ' + this.cards[suit][card].name;
  }

  getKeyByValue(object, value) {
    console.log(object, value);
    return Object.keys(object).find((key) => object[key] === value);
  }
}
