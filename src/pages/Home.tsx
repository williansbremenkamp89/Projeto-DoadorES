import { useHistory} from 'react-router-dom';

import { auth, firebase } from '../services/firebase';

import ilustracaoImg from '../assets/images/imagehome.jpg';
import logoImg from '../assets/images/doadoreslogo.png';
import googleImageIcon from '../assets/images/icongoogle.png';
import faceBookImageIcon from '../assets/images/iconfacebook.png';

import '../style/auth.scss';

import { Button } from '../components/button';


export function Home(){

  const history = useHistory();

  function handlerCreateUsuarioGoogle() {
    
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then(result => {
      console.log(result);
      history.push('/user/profile');
    })

  }

  function handlerCreateUsuarioFacebook() {
    
    const provider = new firebase.auth.FacebookAuthProvider();

    auth.signInWithPopup(provider).then(result => {
      console.log(result);
      history.push('/user/profile');
    })

  }

  return (
    <div id="page-auth">
      <aside>
        <strong>Doe sangue, salve vidas.</strong>
        <p>Você é a esperança de muitos</p>
        <img src={ilustracaoImg} alt="fonte: https://pt.vecteezy.com/arte-vetorial/2270799-conceito-do-dia-do-doador-de-sangue" />        
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logo doadores" />
          <div className="main-form">
            <button onClick={handlerCreateUsuarioGoogle} className="acess-google">
              <img src={googleImageIcon} alt="" />
              Entre com sua conta Google
            </button>
            <button onClick={handlerCreateUsuarioFacebook} className="acess-facebook">
              <img src={faceBookImageIcon} alt="" />
              Entre com sua conta do Facebook
            </button>
            <div className="separador">ou entre com outra conta</div>
            <form action="">
              <input 
              type="text" 
              placeholder="Digite seu e-mail"
              />
              <input 
              type="password" 
              placeholder="Digite sua senha"
              />
              <Button type="submit">
                Entrar
              </Button>
              <div className="options">
                <p> <a href="/user/register">Registre-se.</a> </p>
                <p> <a href="https://www.google.com/">Esqueci a senha.</a> </p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}