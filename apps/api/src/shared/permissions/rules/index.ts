import type { AbilityBuilder } from '@casl/ability';
import type { AbilityUser, AppAbility } from '@api/shared/permissions/ability.util';
import { applyClubRules } from './club.rules';
import { applyCrmRules } from './crm.rules';
import { applyFinanceRules } from './finance.rules';
import { applyHrRules } from './hr.rules';
import { applyInventoryRules } from './inventory.rules';

export function applyAllRules(builder: AbilityBuilder<AppAbility>, user: AbilityUser) {
  applyHrRules(builder, user);
  applyCrmRules(builder, user);
  applyFinanceRules(builder, user);
  applyInventoryRules(builder, user);
  applyClubRules(builder, user);
}
