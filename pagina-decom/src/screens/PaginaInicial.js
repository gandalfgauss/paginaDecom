import './PaginaInicial.css'; // Importar estilos da PaginaIncial
import React from 'react'; // Importar a biblioteca React


//Importando Imagens
import logoDecomCabecalho from "../images/logodecom.png";
import iconePesquisa from "../images/menuCabecalhoIconePesquisaSvg.svg";
import iconeAreaRestrita from "../images/menuCabecalhoAreaRestritaImagem.png";
import imagemDoDECOM from "../images/principalBemVindoaoDecomImagem.png";


import logoDECOM from "../images/logoDECOM2.png";
import logoUFOP from "../images/logoUFOP.png";
import logoICEB from "../images/logoICEB.png";
import logoPPGCC from "../images/logoPPGCC.png";
import logoTerraLAB from "../images/logoTerraLAB.png";
import logoXR4 from "../images/logoXR4.png";

import menuLateralSeta from "../images/menuLateralSeta.svg";

import iconeInstagram from "../images/iconeInstagram.png";

function Rodape()
{

    return (
        <div className='rodape'>
            <div className='redesSociais'>
                <div className="instagram">
                    <img
                        className='iconeInstagram'
                        alt="Ícone do Instagram"
                        src={iconeInstagram}
                    />
                    <a href='https://www.instagram.com/minhaufop/' className='textoInstagram'> @minhaufop </a>
                </div>

                <div className="instagram">
                    <img
                        className='iconeInstagram'
                        alt="Ícone do Instagram"
                        src={iconeInstagram}
                    />
                    <a href='https://www.instagram.com/comunicacao.iceb/' className='textoInstagram'> @comunicacao.iceb </a>
                </div>

                <div className="instagram">
                    <img
                        className='iconeInstagram'
                        alt="Ícone do Instagram"
                        src={iconeInstagram}
                    />
                    <a href='https://www.instagram.com/decom.ufop/' className='textoInstagram'> @decom.ufop </a>
                </div>
            </div>

            <div className='contato'>
                <div className='menuCabecalhoDecom'>
                    <img
                    className="menuCabecalhoDecomImagem"
                    alt="Logo do DECOM"
                    src={logoDecomCabecalho}
                    />
                    <a href='http://localhost:3000/'><p className="menuCabecalhoDecomTexto">DECOM</p></a>  
                </div>

                <div className="rodapeTexto">
                    <p>
                            Departamento de Computação | ICEB | Universidade Federal de
                            Ouro Preto
                    </p>
                    <p>
                            Campus Universitário Morro do Cruzeiro | CEP 35400-000 |
                            Ouro Preto - MG, Brasil
                    </p>
                    <p>
                        {`Telefone: +55 31 3559-1692 | `}
                        <a
                            href="mailto:decom@ufop.edu.br"
                        >
                            <span className="emailUfop">decom@ufop.edu.br</span>
                        </a>
                    </p>
                </div>

                
            </div>

        </div>
    )
}

function MenuLateral(props)
{
    const {referencias} = props
    const [estadoImagem, setEstadoImagem] = React.useState(false);

    const [estadoBemVindo, setEstadoBemVindo] = React.useState(false);
    const [estadoEducacao, setEstadoEducacao] = React.useState(false);

    function clicouBemVindo()
    {
        if(estadoBemVindo){
            referencias[0].current.scrollIntoView({ behavior: 'smooth', block: "end" });
        }
        else{
            setEstadoBemVindo(true);
            setEstadoEducacao(false);
            referencias[0].current.scrollIntoView({ behavior: 'smooth', block: "end"  });
        }     
    }

    function clicouEducacao()
    {
        if(estadoEducacao){
            referencias[1].current.scrollIntoView({ behavior: 'smooth', block: "end"  });
        }
        else{
            setEstadoEducacao(true);
            setEstadoBemVindo(false);
            referencias[1].current.scrollIntoView({ behavior: 'smooth', block: "end"  });
            
        }
        
    }

    function rodaImagem()
    {
        setEstadoImagem(!estadoImagem);   
    }    
    
    React.useEffect(()=>{
        document.addEventListener('rolagemBemVindo', ()=>{
            setEstadoBemVindo(true);
            setEstadoEducacao(false);
        });
        document.addEventListener('rolagemEducacao', ()=>{
            setEstadoEducacao(true);
            setEstadoBemVindo(false);
        });

        return ()=>{
            document.removeEventListener('rolagemBemVindo', ()=>{setEstadoBemVindo(true)});
            document.removeEventListener('rolagemEducacao', ()=>{setEstadoEducacao(true)});

        }
    }, [])

    return (
        <div className='menuLateral'>         
            <div className='menuLateralTitulo'>
                <b className="menuLateralTituloTexto">Início</b>
                
                <img
                    onClick={rodaImagem}
                    className={`${estadoImagem?"menuLateralTituloIcon rodaImagem":"menuLateralTituloIcon"}`}
                    alt="Ícone de seta"
                    src={menuLateralSeta}  
                />
            </div>

            {!estadoImagem && 
                    <div className='menuLateralOpcoes'>
                        <p onClick={clicouBemVindo} className={`${estadoBemVindo? 'menuLateralOpcaoNaoAtiva menuLateralOpcaoAtiva':"menuLateralOpcaoNaoAtiva"}`}>Bem-vindo ao DECOM</p>
                        <p onClick={clicouEducacao} className={`${estadoEducacao? 'menuLateralOpcaoNaoAtiva menuLateralOpcaoAtiva':"menuLateralOpcaoNaoAtiva"}`}>Educação</p>
                    </div>}
        </div>
    )
}

function ConteudoPrincipal(props)
{
    const referencias = props.referencias;

    const passouMouseBemVindo= ()=>{
        const customEvent = new CustomEvent('rolagemBemVindo', { detail: { foo: 'bar' } });
        document.dispatchEvent(customEvent);
    }

    const passouMouseEducacao= ()=>{
        const customEvent = new CustomEvent('rolagemEducacao', { detail: { foo: 'bar' } });
        document.dispatchEvent(customEvent);
    }

    return (
        <div className='conteudoPrincipal'>
            <b className="principalTextoInicio">Início</b>
            <div className='principalLinha'/>
            
            <div ref={referencias[0]} onMouseEnter={passouMouseBemVindo} className='principalBemVindoAoDecom'>
                <b className="principalBemVindoAoDecomTexto"> Bem-vindo ao Decom </b>
                <p className="principalBemVindoAoDecomSubTexto"> Departamento de Computação da Universidade Federal de Ouro Preto</p>
                <img
                  className="principalBemVindoAoDecomImagem"
                  alt="Foto do DECOM na Universidade Federal de Ouro Preto"
                  src={imagemDoDECOM}
                />
            </div>

            <div className='principalLinha'/>

            <div ref={referencias[1]} onMouseEnter={passouMouseEducacao} className='principalEducacao'>
                <b className="principalEcucacaoTexto"> Educação </b>
                <p className="principalEducacaoSubTexto"> Instituições </p>
                
                <div className='principalEducacaoCarrocel'> 
                    <a href="http://localhost:3000/"> 
                        <img
                            src={logoDECOM}
                            alt= "Logo do DECOM"
                            className="principalEducacaoCarrocelImagem"/>
                    </a>
                    <a href="https://www.ufop.br/"> 
                        <img
                            src={logoUFOP}
                            alt= "Logo da UFOP"
                            className="principalEducacaoCarrocelImagem"/>
                    </a>
                    <a href="https://iceb.ufop.br/"> 
                        <img
                            src={logoICEB}
                            alt= "Logo do ICEB"
                            className="principalEducacaoCarrocelImagem"/>
                    </a>
                </div>

                <p className="principalEducacaoSubTexto"> Programas </p>
                
                <div className='principalEducacaoCarrocel'> 
                    <a href="http://www3.decom.ufop.br/pos/inicio/"> 
                        <img
                            src={logoPPGCC}
                            alt= "Logo do PPGCC"
                            className="principalEducacaoCarrocelImagem"/>
                    </a>
                    <a href="http://www2.decom.ufop.br/terralab/"> 
                        <img
                            src={logoTerraLAB}
                            alt= "Logo do TerraLAB"
                            className="principalEducacaoCarrocelImagem"/>
                    </a>
                    <a href="http://xr4goodlab.decom.ufop.br/"> 
                        <img
                            src={logoXR4}
                            alt= "Logo do XR4GOODLAB"
                            className="principalEducacaoCarrocelImagem"/>
                    </a>
                </div>
            </div>
            
        </div>
    )
}

function MeioDaPagina()
{
    const refBemVindo = React.useRef(null);
    const refEducacao = React.useRef(null);
    const referencias = [refBemVindo, refEducacao];

    return (
        <div className='meioDaPagina'>
            <ConteudoPrincipal referencias={referencias}/>
            <MenuLateral referencias={referencias}/>
        </div>
    )
}
function MenuCabecalho()
{
    return (
        <div className='menuCabecalho'>    
            <div className='menuCabecalhoDecom'>
                <img
                className="menuCabecalhoDecomImagem"
                alt="Logo do DECOM"
                src={logoDecomCabecalho}
                />
                <a href='http://localhost:3000/'><p className="menuCabecalhoDecomTexto">DECOM</p></a>  
            </div>

            <div className="menuCabecalhoOpcoes">
                <div className="textoCabecalhoMenu textoCabecalhoMenuInicio"><a href='http://localhost:3000/'><p>Início</p></a></div>
                <div className="textoCabecalhoMenu"><a href='http://www3.decom.ufop.br/decom/o-decom/'><p>DECOM</p></a></div>
                <div className="textoCabecalhoMenu"><a href='http://www3.decom.ufop.br/decom/noticias/noticias/'><p>Notícias e Eventos</p></a></div>
                <div className="textoCabecalhoMenu"><a href='http://www3.decom.ufop.br/decom/pessoal/professores/'><p>Pessoal</p></a></div>
                <div className="textoCabecalhoMenu"><a href='http://www3.decom.ufop.br/decom/ensino/bacharelado/'><p>Ensino</p></a></div>
                <div className="textoCabecalhoMenu"><a href='http://www3.decom.ufop.br/decom/cocic/'><p>COCIC</p></a></div>
                <div className="textoCabecalhoMenu"><a href='http://www3.decom.ufop.br/decom/decom.wsgi/pesquisa/labs/'><p>Pesquisa</p></a></div>
                <div className="textoCabecalhoMenu"><a href='http://www3.decom.ufop.br/decom/extensao/projetos/'><p>Extensão</p></a></div>
                <div className="textoCabecalhoMenu"><a href='http://www3.decom.ufop.br/decom/contato/'><p>Contato</p></a></div>        
            </div>

            <div className="menuCabecalhoPesquisa">
                <img
                className="menuCabecalhoIconePesquisaSvg"
                alt="Imagem da lupa de pesquisar"
                src={iconePesquisa}
                />
                <input placeholder="Pesquisar" className="menuCabecalhoInputPesquisa"/>
          </div>

          <div className="menuCabecalhoAreaRestrita">
            <img
              className="menuCabecalhoAreaRestritaImagem"
              alt="Ícone Área Restrita"
              src={iconeAreaRestrita}
            />
            <div className="menuCabecalhoAreaRestritaTexto"><a href='http://www3.decom.ufop.br/decom/login/?next=/decom/login/admin/'>Área Restrita</a></div>
          </div>     
        </div>
    )
}

function Cabecalho1()
{
    return(
        <div className='cabecalho1'>
            <p className='textoDecomCabecalho1'> Departamento de Ciência da Computação</p>
            <a href='https://www.ufop.br/'> <p className='textoUfopCabecalho1'>👉 UFOP </p></a>
        </div>
    )
}

function Cabecalho(){
  return (
    <div className='cabecalho'>
        <Cabecalho1/>    
        <MenuCabecalho/>
    </div>  
  );
}

function Conteudo()
{
    return (
        <div className='conteudo'>
            <Cabecalho/>
            <MeioDaPagina/>
            <Rodape/>
        </div>
    )
}


function PaginaInicial() {
    document.title = "DECOM-UFOP|Início"
  return (
    <Conteudo/>
  );
}

export default PaginaInicial;
