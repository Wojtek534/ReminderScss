import React from 'react';
//import ColorSet from './presentation/ColorSet';
//import Search from './presentation/Search';
import ButtonSet from './presentation/NewButtonSet';
//import Old from './presentation/Old';
class HomePage extends React.Component {
  render()
  {
    return (
      <div id="page">
        <hr/>
        <ButtonSet/>
        <hr/>
      </div>
    )
  }
}
export default HomePage;
