import './PaginaInicial.css'; // Importar estilos da PaginaIncial
import React from 'react'; // Importar a biblioteca React


//Importando Imagens
import logoDecomCabecalho from "../images/logodecom@2x.png"

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
                <b className="menuCabecalhoDecomTexto">DECOM</b>    
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
        </div>
    )
}

function Cabecalho1()
{
    return(
        <div className='cabecalho1'>
            <b className='textoDecomCabecalho1'> Departamento de Ciência da Computação</b>
            <a href='https://www.ufop.br/'> <b className='textoUfopCabecalho1'>👉 UFOP </b></a>
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
        </div>
    )
}


function PaginaInicial() {

  return (
    <Conteudo/>
  );
}

export default PaginaInicial;
