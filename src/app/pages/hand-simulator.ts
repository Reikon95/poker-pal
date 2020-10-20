import { OnInit, Component } from '@angular/core';

@Component({
  templateUrl: './hand-simulator.html',
  styleUrls: ['./hand-simulator.scss'],
})
export class HandSimulatorComponent implements OnInit {
  cards = {
    hearts: {
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      11: false,
      queen: false,
      king: false,
      ace: false,
    },
    spades: {
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      11: false,
      12: false,
      13: false,
      14: false,
    },
    diamonds: {
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      11: false,
      12: false,
      13: false,
      14: false,
    },
    clubs: {
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      11: false,
      12: false,
      13: false,
      14: false,
    },
  };

  communityCards = [];

  userPlayer = {
    card1: null,
    card2: null,
  };

  otherPlayers = [];

  ngOnInit(): void {
    console.log(this.cards);
  }

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

    return this.cards[suit][card];
  }
}
