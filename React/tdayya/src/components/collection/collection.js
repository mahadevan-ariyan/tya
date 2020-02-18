import React, { Component } from 'react';
class Collection extends Component {
  
    
  
render() {
    
  return<div>Collection
  <li class="menu-has-children"><a href="" class="sf-with-ul">Drop Down</a>
            <ul style="display: none;">
              <li><a href="#">Drop Down 1</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
              <li><a href="#">Drop Down 5</a></li>
            </ul>
          </li>
          </div>
}
}
export default Collection;
