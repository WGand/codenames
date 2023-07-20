import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-page-error',
    templateUrl: './page-error.component.html',
    styleUrls: ['./page-error.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageErrorComponent implements OnInit {
    constructor(
        private activatedRoute: ActivatedRoute,
        private cd: ChangeDetectorRef) {}

    code = 0;
    codeToMessage = {
        404: 'Parece que el enlace a este juego está caducado. ¡Pero siempre puedes comenzar uno nuevo!',
        500: 'Algo salió mal...'
    };

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(value => {
            this.code = Number(value.get('code')) || 500;
            this.cd.markForCheck();
        });
    }

}
