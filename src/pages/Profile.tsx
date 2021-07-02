import Avatar from '../assets/images/avatar.jpg';
import logoImg from '../assets/images/doadoreslogo.png';

import '../style/profile.scss';

import { Button } from '../components/button';


//import { Button } from '../components/button';


export function Profile(){
  return (
    <div id="page-profile">
      <header>
        <div className="header-content">
          <img src={logoImg} alt="Logo doadores" /> 
        </div>
      </header>
      <body>
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
        <main>
          <div className="main-content"> 
            <div className="group-buttons">
              <Button type="button" >
                Agendar Doação
              </Button>
              {/* <div>
                Formulário de doação
              </div> */}
              <Button type="button" >
                Atender Solicitação
              </Button>
              {/* <div>
              Formulário de solicitação
              </div> */}
              <Button type="button" >
                Solicitar Doação
              </Button>
              {/* <div>
              Formulário para solicitar doação
              </div> */}
              <Button type="button" >
                Histórico
              </Button>              
              {/* <div>
                Historico de doações e solicitações
              </div> */}
              <Button type="button" >
                Editar Perfil
              </Button>              
              {/* <div>
                Historico de doações e solicitações
              </div> */}
              <Button type="button" >
                Ajuda
              </Button>              
              {/* <div>
                Historico de doações e solicitações
              </div> */}
            </div>
          </div>
        </main>
      </body>
    </div>
  )
}