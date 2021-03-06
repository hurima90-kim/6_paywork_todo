/**
 * Action types
 */
 export enum ItemsTypes {
    ADD_ITEM = 'ADD_ITEM',
    TOGGLE_ITEM = 'TOGGLE_ITEM',
    TOGGLE_EDIT_ITEM = 'TOGGLE_EDIT_ITEM',
    UPDATE_ITEM = 'UPDATE_ITEM',
    REMOVE_ITEM = 'REMOVE_ITEM',
    LOAD_REQUEST = 'LOAD_REQUEST',
    LOAD_SUCCESS = 'LOAD_SUCCESS',
    LOAD_FAILURE = 'LOAD_FAILURE'
  }
  
  /**
   * Filter options
   */
  export enum VisibilityFilters {
    SHOW_ALL = 'SHOW_ALL',
    SHOW_ACTIVE = 'SHOW_ACTIVE',
    SHOW_COMPLETED = 'SHOW_COMPLETED',
    UPDATE_FILTER = 'UPDATE_FILTER'
  }
  
  export interface TodoListActionTypes {
    type: string,
    payload: Item,
    todoList: Item[]
  }
  
  export interface FilterActionTypes {
    type: string,
    payload: {
      filter: string
    }
  }
  
  /**
   * Data types
   */
  export interface CounterProps {
    taskCounter: {
      counter: number,
      content: string
    }
  }

  export interface Item {
    id: number,
    content: string,
    editing: boolean,
    isCheck: boolean,
    createdAt: string
  }
  
  /**
   * State types
   */
  export interface ApplicationState {
    items: ItemsState,
    filterState: string
  }
  
  export interface ItemsState {
    readonly todoList: Item[]
  }