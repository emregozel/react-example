import React from "react";
import Footer from "./Footer";
import Content from "./Content";
import Header from "./Header";
require('../../scss/style.scss');
require('../../data/data.json');


export default class Layout extends React.Component {
    render() {
        var tarih = new Date();
        console.log(tarih);

        return (
            <div>
                <Header />
                <Content first_name="Emre Anıl" last_name="Gözel" email="emre@gozel.org" gender="Male" />
                <Content first_name="Hakan" last_name="Balkaya" email="hakanbalkaya@gmail.com" gender="Male" />
                <Content first_name="Alper" last_name="Köroğlu" email="alperkoroglu@gmail.com" gender="Female" />
                <Footer />
            </div>
        );
    }
}
