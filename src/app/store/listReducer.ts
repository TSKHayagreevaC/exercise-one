import { createSlice } from '@reduxjs/toolkit'

export const listReducer = createSlice({
  name: 'list',
  initialState: {
    value:[{
      id: 'a7b9e435-9065-4ac0-b084-ebdc302d824d',
      name: 'Mini',
      model: 'Camry',
      yearOfRelease: 2023,
      brand: 'Toyota',
      color: 'Grey'
    }]
  },
  reducers: {
    add: (state, action:any) => {
      console.log('redux :: ', state.value)
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return {...state, list: [...state.value, action.payload]}
        
    },
  }
})

// Action creators are generated for each case reducer function
export const { add } = listReducer.actions

export default listReducer.reducer