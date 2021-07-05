import Avatar from '../assets/images/avatar.jpg';
// import logoImg from '../assets/images/doadoreslogo.png';

import '../style/profile.scss';

export function Perfil(){
  return (    
      <aside>
        <div>
          <p>Olá </p>
          <strong>Hermes Willians,</strong>
          <p>Você é a esperança de muitos.</p>            
          <div className="card">
            <img src={Avatar} alt="Avatar" />
          </div>
        </div>        
      </aside>
  )
}