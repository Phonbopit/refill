# refill [![Build Status](https://semaphoreci.com/api/v1/phonbopit/refill/branches/master/badge.svg)](https://semaphoreci.com/phonbopit/refill)

Refill : React and Redux Utilities function and Toolkits

## Usage

### If

```jsx
<div className="container">
  <If render={isShow}>
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

// More
// TODO
