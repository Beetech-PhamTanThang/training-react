import React, {useReducer} from "react";
import {IoIosCloseCircleOutline} from "react-icons/io";
import styled from "styled-components";

interface ItemState {
    item: string,
    listItem: string[]
}

interface SetItemAction {
    type: typeof SET_ITEM;
    payload: string;
}

interface AddItemAction {
    type: typeof ADD_ITEM;
    payload: string;
}

interface DeleteItemAction {
    type: typeof DELETE_ITEM;
    payload: string;
}

type ItemAction = SetItemAction | AddItemAction | DeleteItemAction;

const initItems = {
    item: '',
    listItem: []
}

const SET_ITEM: string = 'set_item';
const ADD_ITEM: string = 'add_item';
const DELETE_ITEM: string = 'delete_item'

const setItem = (payload: string) => {
    return {
        type: SET_ITEM,
        payload
    }
}
const addItem = (payload: string) => {
    return {
        type: ADD_ITEM,
        payload
    }
}
const deleteItem = (payload: string) => {
    return {
        type: DELETE_ITEM,
        payload
    }
}

const handleReducer = (state: ItemState, action: ItemAction) => {
    switch (action.type) {
        case ADD_ITEM: {
            if (action.payload === '') {
                alert('Vui lòng nhập giá trị!')
                return state;
            }
            return {
                ...state,
                listItem: [...state.listItem, action.payload],
            }
        }
        case SET_ITEM: {
            return {
                ...state,
                item: action.payload
            }
        }
        case DELETE_ITEM: {
            let id: number;
            id = parseInt(action.payload);
            return {
                ...state,
                listItem: state.listItem.filter((item, index) => {
                    return index !== id
                })
            }
        }
        default:
            throw new Error('Invalid')
    }
    return state;
}

const DemoUseReducerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  .form-item {
    & > div {
      display: flex;
      gap: .5rem;
    }
    input {
      outline: none;
      height: 1.5rem;
      font-size: 1rem;
    }
    button {
      width: 4rem;
      border-radius: 2rem;
      border: none;
      cursor: pointer;
      background: darkorange;
      color: white;
    }
  }
`;

const StyledResultItems = styled.ul`
  list-style-type: decimal;
`;
const StyledItem = styled.div`
  display: flex;
  gap: 0.5rem;
  & > span {
    cursor: pointer;
  }
`;

const DemoUseReducer: React.FC = () => {
    const [items, dispatchItem] = useReducer(handleReducer, initItems);
    const {item, listItem} = items;

    const handleSubmit = () => {
        //Action add new item
        dispatchItem(addItem(item))
        //Reset value item
        dispatchItem(setItem(''))
    }

    return (
        <DemoUseReducerWrapper>
            <form className='form-item'>
                <label htmlFor="item">Ví dụ áp dụng useReducer</label>
                <div>
                    <input type="text"
                           id="item"
                           value={item}
                           onChange={(e) => dispatchItem(setItem(e.target.value))}
                           placeholder="Thêm giá trị"
                           required={true}/>
                    <button onClick={handleSubmit} type="submit">Lưu</button>
                </div>
            </form>
            <StyledResultItems>
                {listItem?.map((item, index) => {
                    return <li key={index}>
                        <StyledItem>
                            <div>{item}</div>
                            <span onClick={() => dispatchItem(deleteItem(index.toString()))}>
                                <IoIosCloseCircleOutline/>
                            </span>
                        </StyledItem>
                    </li>;
                })}
            </StyledResultItems>
        </DemoUseReducerWrapper>
    );
}

export default DemoUseReducer;