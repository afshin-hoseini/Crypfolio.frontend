/** Generates a key for mapping the trade modification statuses. */
export function createTradeModificationKey(action: string, id: string | number) {
  return `${action}_${id}`;
}
