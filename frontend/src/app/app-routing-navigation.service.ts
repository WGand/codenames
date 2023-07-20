import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { PlayerType } from "../../../server/src/api/player_type";

/**
 * To simplify refactoring and reusing different application
 * navigation routes, all the routes formatting in one place.
 */
@Injectable()
export class AppRoutingNavigationService {
    constructor(private router: Router) {}

    toStart() {
        this.router.navigate(["codenames-server"]);
    }

    toNewGame() {
        this.router.navigate(["codenames-server/game/new"]);
    }

    toRules() {
        this.router.navigate(["codenames-server/rules"]);
    }

    toJoinGame(gameId: string) {
        this.router.navigate(["codenames-server/game", gameId, "join"]);
    }

    toGameBoard(gameId: string, playerType: PlayerType) {
        this.router.navigate([
            "codenames-server/game",
            gameId,
            "player",
            playerType,
            "board",
        ]);
    }

    toError(code: number) {
        this.router.navigate(["codenames-server/error", code]);
    }

    getJoinLink(gameId: string) {
        return `${window.location.origin}/codenames-server/game/${gameId}/join`;
    }
}
