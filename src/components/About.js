import React from 'react'
import NavMenu from "./NavMenu";

class About extends React.Component {



    render() {
        return (
            <div className="container" id="about">
                <NavMenu />
                <div className="body">
                <div style={{margin:"20px",width:"400px",color:"aliceblue", border:"2px solid #17A2B8",textAlign:"center",padding:"5px"}}>
                    <h3>ABOUT</h3>
                  <p>Renk, ışığın gözün retinasına değişik biçimde ulaşması ile ortaya çıkan bir algılamadır. 
                     Bu algılama, ışığın maddeler üzerine çarpması ve kısmen soğurulup kısmen yansıması 
                     nedeniyle çeşitlilik gösterir ki bunlar renk tonu veya renk olarak adlandırılır.
                     Tüm dalga boyları birden aynı anda gözümüze ulaşırsa bunu beyaz, hiç ışık ulaşmazsa 
                     siyah olarak algılarız. İnsan gözü 380 nm ile 780 nm arasındaki dalgaboylarını algılayabilir,
                     bu sebepten elektromanyetik spektrumun bu bölümüne görünür ışık denir.
                     Renkler için genelde kulağımızla duyduğumuz ince ve kalın ses analojisi yapılsa da, 
                     ses algısının aksine aynı anda gelen ışık frekansları değişik kanallardan algılanamaz
                     (başka bir deyişle göz frekans analizi yapamaz).
                
                  </p>
                </div>
                <div style={{margin:"20px",width:"400px" ,color:"aliceblue", border:"2px solid #17A2B8",textAlign:"center",padding:"5px"}}>
                    <h3>COLOR</h3>
                  <p>
                       Color is a project that emerges as the transformation reaches the retina of the eye.
                       This permanent, residual matter is struck and absorbed and reflected.
                       they are called hue or color.
                       If all wavelengths reach our eyes at the same time, it is white, if no light reaches our eyes
                       we perceive it as black. The human eye can detect wavelengths between 380 nm and 780 nm,
                       For this reason, the electromagnetic spectrum is called visible light.
                       Although the thin and thick sound that we usually hear with our ears is analogous for colors,
                       Light frequencies of sound perception at the same time cannot be perceived from different channels
                       (another word cannot do frequency analysis).
                
                  </p>
                </div>
                </div>

            </div>
        )
    }
}

export default About
