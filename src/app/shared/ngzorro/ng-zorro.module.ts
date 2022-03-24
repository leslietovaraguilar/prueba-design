/*================ IMPORTS ================*/
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import locales from '@angular/common/locales/es';

/*================ ICONS ================*/
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, es_ES } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

/*================ MODULE COMPONENTS ================*/
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzStepsModule } from 'ng-zorro-antd/steps';
registerLocaleData(locales);
/*================ CONST ICONS ================*/

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};

const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  key => antDesignIcons[key]
);

const NG_ZORRO_COMPONENTS = [
  NzIconModule,
  NzInputModule,
  NzSelectModule,
  NzButtonModule,
  NzTabsModule,
  NzCollapseModule,
  NzDividerModule,
  NzBadgeModule,
  NzPopoverModule,
  NzAvatarModule,
  NzDrawerModule,
  NzMenuModule,
  NzPaginationModule,
  NzNotificationModule,
  NzSkeletonModule,
  NzCheckboxModule,
  NzCardModule,
  NzDatePickerModule,
  NzTagModule,
  NzLayoutModule,
  NzToolTipModule,
  NzFormModule,
  NzTableModule,
  NzStepsModule,
];

@NgModule({
  imports: [...NG_ZORRO_COMPONENTS],
  exports: [...NG_ZORRO_COMPONENTS],
  providers: [
    { provide: NZ_I18N, useValue: es_ES },
    { provide: NZ_ICONS, useValue: icons },
  ],
})
export class NgZorroModule {}
