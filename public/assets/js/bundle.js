const Navbar = () => {
  return $('<h1>adasdsa</h1>');
}

'use strict';
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Navbar());
  root.append(wrapper);
}

$( _ => {
  const root = $('.root');
  render(root);
})
