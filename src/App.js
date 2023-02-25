import { PHOTO_GALLERY } from './PHOTO_GALLERY/PHOTO_GALLERY';
import { CURRENCY_CONVERTER } from './CURRENCY_CONVERTER/CURRENCY_CONVERTER';
import { LIST_USERS } from './LIST_USERS/LIST_USERS';
import { QUIZ } from './QUIZ/QUIZ';
import { MODAL_WINDOW } from './MODAL_WINDOW/MODAL_WINDOW';
import { COUNTER } from './COUNTER/COUNTER';
import './index.scss';

function App() {

  window.addEventListener('load', () => setTimeout(function(){document.body.style.opacity = '1'}, 200));

  return (
    <div className='App'>
      <PHOTO_GALLERY />
      <CURRENCY_CONVERTER />
      <LIST_USERS />
      <QUIZ />
      <MODAL_WINDOW />
      <COUNTER />
    </div>
  )
}

export default App;
