/* HOC ducks
 * allow you to perform several operations on a list of items, and the items can be anything
 */
import { fromJS } from 'immutable';

const duck = (name) => {
  const initialState = fromJS({
    [name]: [],
    isLoading: true,
  });

  const types = {
    reset: `${name}_RESET`,
    addOne: `${name}_ADD_ONE`,
    addMany: `${name}_ADD_MANY`,
    removeOne: `${name}_REMOVE_ONE`,
    updateOne: `${name}_UPDATE_ONE`,
    set: `${name}_SET`,
  }

  const actions = {
    reset: () => ({
      type: types.reset,
    }),
    addOne: item => ({
      type: types.addOne,
      item,
    }),
    addMany: items => ({
      type: types.addMany,
      items,
    }),
    removeOne: oldItem => ({
      type: types.removeOne,
      oldItem,
    }),
    updateOne: (oldItem, newItem) => ({
      type: types.updateOne,
      oldItem,
      newItem,
    }),
    set: items => ({
      type: types.set,
      items,
    }),
  }

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case types.reset: {
        return state
          .set(name, [])
          .set('isLoading', false)
      }
      case types.addOne: {
        return state[name].push(action.item)
      }

      case types.addMany: {
        return state[name].push(action.items)
      }

      default: {
        return []
      }
    }
  }
  return {
    types,
    actions,
    reducer,
  }
}

export default duck
