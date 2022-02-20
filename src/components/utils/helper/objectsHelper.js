export const updateObjectInArray = (
  items,
  itemId,
  objectPropName,
  newoObjectProps
) => {
  return items.map((u) => {
    if (u[objectPropName] === itemId) {
      return { ...u, ...newoObjectProps };
    }
    return u;
  });
};
