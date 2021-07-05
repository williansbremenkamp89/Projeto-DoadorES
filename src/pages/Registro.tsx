import ilustracaoImg from '../assets/images/imagehome.jpg';
import logoImg from '../assets/images/doadoreslogo.png';

import '../style/auth.scss';

import { Button } from '../components/button';

export function Registro(){
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
          <div className="separador">Crie sua conta aqui.</div>
          <form action="">
            <input 
            type="text" 
            placeholder="Nome"
            />
            <input 
            type="text" 
            placeholder="Sobre nome"
            />
            <input 
            type="text" 
            placeholder="Data nascimento"
            />
            <input 
            type="text" 
            placeholder="E-mail"
            />
            <input 
            type="password" 
            placeholder="Senha"
            />
            <input 
            type="password" 
            placeholder="Confirme sua senha"
            />
            <Button type="submit">
              Cadastrar
            </Button>            
          </form>
        </div>
      </main>
    </div>
  )
}