import React, { FC, useCallback } from 'react';
import Icon from '@mdi/react';
import { mdiPinOutline, mdiPinOff } from '@mdi/js';
import { useThemeContext } from 'src/Theme';
import { ActionButton } from '../../styles';
import { OverviewTableActionFn } from 'src/features/OverviewTable/@types';

/**
 * Represents overview tables actions for each row.
 */
export const ActionsCellComponent: FC<{ vault: Vault; onPinClicked?: OverviewTableActionFn }> = ({
  vault,
  onPinClicked,
}) => {
  const { colors } = useThemeContext();

  const onPinClickHandler = useCallback(() => onPinClicked?.(vault), [vault, onPinClicked]);

  return (
    <ActionButton onClick={onPinClickHandler}>
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
