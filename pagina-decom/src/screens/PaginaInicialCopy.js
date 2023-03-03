import './PaginaInicialCopy.css'; // Importar PaginaIncial
import React from 'react'; // Importar a biblioteca React

//Importar Imagens para cabeçalho de educação
import logoUFOP from "../images/logoUFOP.png";
import logoDecom from "../images/logoDecom.png";
import logoPPGC from "../images/logoPPGC.png";
import logoICEB from "../images/logoICEB.png";
import logoAreaRestrita from "../images/logoAreaRestrita.png";

function RenderizaListaDeImagens({imagens})
{   
    const [activeIndex, setActiveIndex] = React.useState(null);
  
    const handleImageHover = (index) => {
      setActiveIndex(index);
    };
  
    const handleImageLeave = () => {
      setActiveIndex(null);
    };
  
    return (
      <div className="image-list" onMouseLeave={handleImageLeave}>
        {imagens.map((image, index) => (
          <a href={image.href}> 
            <img
                key={index}
                src={image.url}
                alt={image.alt}
                className={`image-item ${activeIndex === index ? "active" : ""}`}
                onMouseOver={() => handleImageHover(index)}
            />
          </a>
        ))}
      </div>
    );
    
}


function CabecalhoEducacao(){

    const imagens = [{url: logoDecom,
                      alt: "Logo do DECOM",
                      href: "http://localhost:3000/"},
                      {url: logoUFOP,
                      alt: "Logo da UFOP",
                      href: "https://www.ufop.br/"},
                      {url: logoICEB,
                      alt: "Logo do ICEB",
                      href: "https://iceb.ufop.br/"},
                      {url: logoPPGC,
                      alt: "Logo do PPGC",
                      href: "http://www3.decom.ufop.br/pos/inicio/"},
                      //{url: logoAreaRestrita,
                      //alt: "Logo da Área Restrita"}
                    ]
    const [activeIndex, setActiveIndex] = React.useState(false);
  
    const handleHover = () => {
        setActiveIndex(true);
        console.log("passou");
    };
                  
    const handleLeave = () => {
        setActiveIndex(false);
    };
   
    return (
        <div id="cabecalhoEducacao" onMouseOver={handleHover} onMouseLeave={handleLeave}>
            <p className={activeIndex ? "paragrafoEducacao activep": "paragrafoEducacao"}> Educação </p>
            <RenderizaListaDeImagens imagens={imagens}/>
            <div className='linhaInferior'></div>
        </div>
      );
}

function Cabecalho(){
    return(
        <div id="cabecalho">
            <img id="logoDecom" src={logoDecom} alt="Logo do Decom"/>
            <p id="paragrafoCabecalhoDecom"> Departamento de Ciência da Computação </p>
            <input type="text" placeholder="Pesquisar" id="myInput"/>
            <a href="http://www3.decom.ufop.br/decom/login/?next=/decom/login/admin/"> <img id="logoAreaRestrita" src={logoAreaRestrita} alt="Área Restrita"/></a>
        </div>
    );
}

function Menu()
{
    return(
        <div className='menu'>
            <p> Olá</p>
            <p> Olá</p>
            <p> Olá</p>
        </div>
    )
}

function Conteudo(){
  return (
    <div>
        <Cabecalho/>
        <div className="exteno">
            <div id='conteudo'>
                <CabecalhoEducacao/>
            </div>
            <Menu/>
        </div>        
    </div>
    
  );
}


function PaginaInicial() {

  return (
    <Conteudo/>
  );
}

export default PaginaInicial;
