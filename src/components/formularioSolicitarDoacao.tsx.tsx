import '../style/profile.scss';

import { Button } from '../components/button';

export function SolicitaDoacao(){
  return (   
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
  )
}