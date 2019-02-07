import {
  createStore
} from "redux";

const navLinks = [{
    href: '/fp',
    pathName: '/A-Z-with-FP',
    label: 'A to Z in FP'
  },{
    href: '/friends',
    pathName: '/friends',
    label: 'Friends of Functor.xyz'
  },
  {
    href: '/resources',
    pathName: '/resources',
    label: 'Resources'
  }
]

const reducer = (state = {
  foo: '',
  links: navLinks
}, action) => {
  switch (action.type) {
    case 'FOO':
      return {
        ...state,
        foo: action.payload
      };
    default:
      return state
  }
};

const makeStore = (initialState, options) => {
  return createStore(reducer, initialState)
}
export default makeStore
