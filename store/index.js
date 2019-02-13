import {
  createStore
} from 'redux';

const navLinks = [{
  key: 0,
  href: '/fp',
  pathName: '/A-Z-with-FP',
  label: 'A to Z in FP'
}, {
  key: 1,
  href: '/friends',
  pathName: '/friends',
  label: 'Friends of Functor.xyz'
},
{
  key: 2,
  href: '/resources',
  pathName: '/resources',
  label: 'Resources'
}
];

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
      return state;
  }
};

const makeStore = (initialState, options) => {
  return createStore(reducer, initialState);
};
export default makeStore;
