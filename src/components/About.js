import React from 'react'

class About extends React.Component {



    render() {
        return (
            <div className="container" id="about">
                <div className="body">
                  <div class="container">
                      <div style={{margin:"20px",width:"800px",height:"400px" ,color:"aliceblue", border:"2px solid #17A2B8",textAlign:"center",padding:"5px"}} className="row">
                      <iframe title="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4809.957247657162!2d38.60702046410545!3d37.79497187172098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1533592801aed4b3%3A0xd51ffed4d5e88eba!2sYavuz%20Selim%20Ortaokulu!5e0!3m2!1sen!2str!4v1614604146857!5m2!1sen!2str" style={{width:"810px",height:"390px", border:"0", allowfullscreen:"", loading:"lazy"}} ></iframe>
                     </div>
                    <div className="row">
                       <div style={{display:"flex", flexDirection:"row",justifyContent:"center",alignItems:"center"}} className="col-sm">
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
                      </div>
                  </div>
                </div>
            </div>
        </div>
        )
    }
}

export default About
