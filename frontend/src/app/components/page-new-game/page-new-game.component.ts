import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DictionaryDescription } from '../../../../../server/src/api/dictionary_description';
import { AppRoutingNavigationService } from '../../app-routing-navigation.service';
import { DictionariesService } from '../../services/dictionaries.service';
import { GameService } from '../../services/game.service';

@Component({
    selector: 'app-page-dictionaries',
    templateUrl: './page-new-game.component.html',
    styleUrls: ['./page-new-game.component.scss']
})
export class PageNewGameComponent implements OnInit {
    constructor(
        private dictionariesService: DictionariesService,
        private snackBar: MatSnackBar,
        private navigation: AppRoutingNavigationService,
        private location: Location,
        private gamesService: GameService) {
    }

    dictionaries: DictionaryDescription[] = [];

    ngOnInit(): void {
        this.dictionaries = this.dictionariesService.dictionaries;
    }

    onDictionarySelect(index: number) {
        this.gamesService.createNewGame(index)
            .then(value => this.navigation.toJoinGame(value.gameId))
            .catch(reason => this.snackBar.open('Algo salió mal...', 'Aaaah!', { duration: 5000 }));
    }

    onBackClick() {
        this.location.back();
    }
}
