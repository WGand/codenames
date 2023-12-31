import { Application, Router } from 'express';
import { bindClass } from '../../core/bind_class';
import { asyncJson } from '../../core/express/async_json';
import { OnApplicationInit } from '../../core/on_application_init';
import { GamesGateway } from '../service/games_gateway';
import { GamesService } from '../service/games_service';
import * as ms from 'pretty-ms';

export class StatController implements OnApplicationInit {
    constructor(
        private app: Application,
        private gamesGateway: GamesGateway,
        private gamesService: GamesService,
    ) {
        bindClass(this);
    }

    private startedAt = Date.now();

    init() {
        this.app.use(
            '/api/stat',
            Router().get('/info', asyncJson(this.getServerStatistics)),
        );
    }

    private async getServerStatistics() {
        return {
            clientsConnected: this.gamesGateway.clientsCount,
            totalGamesPlayed: this.gamesService.totalGamesPlayed,
            upTime: ms(Date.now() - this.startedAt),
        };
    }
}
