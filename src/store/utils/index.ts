/**
 * Generates a key for mapping the trade modification statuses.
 * TODO: Rename it to createModificationKey;
 */
export function createTradeModificationKey(action: string, id: string | number) {
  return `${action}_${id}`;
}

/** It simply shares the same idea of createTradeModificationKey function. */
export const createModificationKey = createTradeModificationKey;
