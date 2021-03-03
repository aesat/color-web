import React from 'react'
import './CardFeature.css'
import Carousel from 'nuka-carousel';


class CardFeatures extends React.Component {
    render() {
        return (
            <div className="container">
                <Carousel>
                    <img alt="" src="https://images.pexels.com/photos/5325866/pexels-photo-5325866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <img alt="" src="https://images.pexels.com/photos/5325847/pexels-photo-5325847.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <img alt="" src="https://images.pexels.com/photos/206434/pexels-photo-206434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <img alt="" src="https://images.pexels.com/photos/2035764/pexels-photo-2035764.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <img alt="" src="https://images.pexels.com/photos/2309268/pexels-photo-2309268.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <img alt="" src="https://images.pexels.com/photos/5325847/pexels-photo-5325847.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                </Carousel>
                <div className="productDetail">
                    <div className="row">
                    <div className="col-sm">
                            <h5 className="titles">Ürün Kodu</h5>
                            <span>KırmızıPan48927</span>
                        </div>
                        <hr/>
                        <div className="col-sm">
                            <h5 className="titles">Renk Seçenekleri</h5>
                            <span>Kırmızı-Beyaz-Mavi-Açık Kırmızı-Mor-Siyah Beyaz Çizgili</span>
                        </div>
                        <div className="col-sm">
                            <h5 className="titles">Ürün Kumaşı</h5>
                            <span>Pamuk</span>
                        </div>
                        <div className="col-sm">
                            <h5 className="titles">Ürünün Markası</h5>
                            <span>LC WAİKİKi</span>
                        </div>
                        <div className="col-sm">
                             <h5 className="titles">YAŞ ARALIĞI</h5>
                             <span>4-8</span>
                        </div>
                        <div className="col-sm">
                             <h5 className="titles">Stok Miktarı</h5>
                             <span>400 Adet</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardFeatures