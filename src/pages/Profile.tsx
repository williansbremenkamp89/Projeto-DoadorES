import logoImg from '../assets/images/doadoreslogo.png';

import '../style/profile.scss';

import { Perfil } from '../components/perfil';
import { Options } from '../components/options';

export function Profile(){
  return (
    <div id="page-profile">
      <header>
        <div className="header-content">
          <img src={logoImg} alt="Logo doadores" /> 
        </div>
      </header>
      <body>
        <Perfil/>        
        <Options/>
      </body>
    </div>
  )
}