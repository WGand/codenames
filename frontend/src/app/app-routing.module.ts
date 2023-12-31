import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageBoardComponent } from "./components/page-board/page-board.component";
import { PageErrorComponent } from "./components/page-error/page-error.component";
import { PageJoinComponent } from "./components/page-join/page-join.component";
import { PageNewGameComponent } from "./components/page-new-game/page-new-game.component";
import { PageRulesComponent } from "./components/page-rules/page-rules.component";
import { PageStartComponent } from "./components/page-start/page-start.component";
import { DictionariesResolve } from "./services/dictionaries.resolve";

const routes: Routes = [
    {
        path: "codenames-server",
        redirectTo: "codenames-server",
        pathMatch: "full",
    },
    { path: "codenames-server", component: PageStartComponent },
    { path: "codenames-server/rules", component: PageRulesComponent },
    {
        path: "codenames-server/game/new",
        component: PageNewGameComponent,
        resolve: {
            dictionaries: DictionariesResolve,
        },
    },
    {
        path: "codenames-server/game/:gameId",
        redirectTo: "codenames-server/game/:gameId/join",
        pathMatch: "full",
    },
    {
        path: "codenames-server/game/:gameId/join",
        component: PageJoinComponent,
    },
    {
        path: "codenames-server/game/:gameId/player/:playerType/board",
        component: PageBoardComponent,
    },
    { path: "error/:code", component: PageErrorComponent },
    { path: "**", redirectTo: "codenames-server" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
