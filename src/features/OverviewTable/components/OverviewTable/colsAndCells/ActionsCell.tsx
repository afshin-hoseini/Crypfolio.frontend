import React, { FC } from 'react';
import Icon from '@mdi/react';
import { mdiPinOutline, mdiPinOff } from '@mdi/js';
import { useThemeContext } from 'src/Theme';
import { ActionButton } from '../../styles';

/**
 * Represents overview tables actions for each row.
 */
export const ActionsCellComponent: FC<{ vault: Vault }> = ({ vault }) => {
  const { colors } = useThemeContext();

  return (
    <ActionButton>
      <Icon
        path={vault.pinned ? mdiPinOff : mdiPinOutline}
        title="Pin to top"
        size={1}
        rotate={vault.pinned ? 0 : 45}
        color={colors?.primary}
      />
    </ActionButton>
  );
};
