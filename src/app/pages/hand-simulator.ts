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
      jack: false,
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
      jack: false,
      queen: false,
      king: false,
      ace: false,
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
      jack: false,
      queen: false,
      king: false,
      ace: false,
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
      jack: false,
      queen: false,
      king: false,
      ace: false,
    },
  };

  communityCards = [];

  userPlayer = {
    card1: null,
    card2: null,
  };

  otherPlayers = [];

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

  dealCards() {
    //deal to user
    //deal to everyone else
  }

  findRandomCard() {
    const suitsArray = ['hearts', 'spades', 'clubs', 'diamonds'];
    const cardsArray = [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      'jack',
      'queen',
      'king',
      'ace',
    ];

    let suit = suitsArray[Math.floor(Math.random() * Math.floor(4))];
    let card = cardsArray[Math.floor(Math.random() * Math.floor(13))];

    return this.cards[suit][card];
  }
}
