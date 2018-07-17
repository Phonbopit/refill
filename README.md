# refill [![Build Status](https://semaphoreci.com/api/v1/phonbopit/refill/branches/master/badge.svg)](https://semaphoreci.com/phonbopit/refill)

Refill : React and Redux Utilities function and Toolkits

## Usage

### If

```jsx
<div className="container">
  <If when={isShow}>
    <p>lorem ipsum</p>
  </If>
</div>
```

Equal to

```jsx
<div className="container">
  {
    isShow ? (
      <p>lorem ipsum</p>
    ) : null
  }
</div>
```

### createActionSet

It so annoy when create action type for redux e.g.

```
const FETCH_USER_DATA_PENDING = 'FETCH_USER_DATA_PENDING'
const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS'
const FETCH_USER_DATA_FAILED = 'FETCH_USER_DATA_FAILED'

const FETCH_USER_LIST_PENDING = 'FETCH_USER_LIST_PENDING'
const FETCH_USER_LIST_SUCCESS = 'FETCH_USER_LIST_SUCCESS'
const FETCH_USER_LIST_FAILED = 'FETCH_USER_LIST_FAILED'
```

Use `createActionSet()` instead

```
const FETCH_USER_DATA = createActionSet('FETCH_USER_DATA')
const FETCH_USER_LIST = createActionSet('FETCH_USER_LIST')
```

### createReducers

My CRUD App (small to medium size) always have app state structure like this:

```
{
  state: {
    users: {
      list: [{}],
      detail: {},
      form: {},
      common: {}
    },
    posts: {
      list: [{}],
      detail: {},
      form: {},
      common: {}
    },
    products: {
      list: [{}],
      detail: {},
      form: {}.
      common: {}
    }
  }
}
```

If we want to create reducers for user list, user detail, post list, post detail, blah blah. its alot of repeat the same code with just different action name then I decided to DRY my code like this.

```
// reducers/users/index.js

import { combineReducers } from 'redux'

import detail from './detail'
import list from './list'

export default combineReducers({
  detail,
  list
})


// reducers/users/list.js
export default createReducers(FETCH_USER_LIST)


// reducers/users/detail.js
export const initialState = {
  isFetching: false,
  data: null,
  error: null
}

export default createReducers(FETCH_USER_DETAIL, initialState)
```


// TODO
// createCommonReducers
// createFormReducers
// AuthenRoute
// getCurrentUser()
// setCurrentUser()
// logout()
