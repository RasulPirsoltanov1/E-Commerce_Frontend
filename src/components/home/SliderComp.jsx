import React, { Component } from "react";
import Slider from "react-slick";
import './SliderCompCss.css'

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "cubic-bezier(0.600, -0.280, 0.735, 0.045)"
        };
        return (
            <div className="my-24 rounded-xl linear-color" >
                <h2> New Shoes</h2>
                <Slider {...settings}>
                    <div className="!flex justify-center items-center flex-wrap">
                        <div className="">
                            <div className="text-5xl font-bold">The best sellers...</div>
                            <div className="my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis facilis temporibus eius doloremque sapiente. Fugit quisquam quis pariatur odit facilis, consequatur sunt esse vero atque velit, exercitationem praesentium, voluptates dignissimos?</div>
                            <button className="rounded-full bg-orange-300 w-52 h-16 text-2xl my-5 text-white">Detallar...</button>
                        </div>
                        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/56ff13a0-d2e6-49ed-bfd2-43dc2ba0922b/dunk-low-big-kids-shoes-Ss5wx2.png" alt="Nike" />
                    </div>
                    <div className="!flex justify-center items-center flex-wrap">
                        <div className="">
                            <div className="text-5xl font-bold">The best sellers...</div>
                            <div className="my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis facilis temporibus eius doloremque sapiente. Fugit quisquam quis pariatur odit facilis, consequatur sunt esse vero atque velit, exercitationem praesentium, voluptates dignissimos?</div>
                            <button className="rounded-full bg-orange-300 w-52 h-16 text-2xl my-5 text-white">Detallar...</button>
                        </div>
                        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b7fd9018-e0ce-4adc-9320-a05b67eef078/air-jordan-1-mid-mens-shoes-tXSJ73.png" alt="Nike" />
                    </div>
                    <div className="!flex justify-center items-center flex-wrap">
                        <div className="">
                            <div className="text-5xl font-bold">The best sellers...</div>
                            <div className="my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis facilis temporibus eius doloremque sapiente. Fugit quisquam quis pariatur odit facilis, consequatur sunt esse vero atque velit, exercitationem praesentium, voluptates dignissimos?</div>
                            <button className="rounded-full bg-orange-300 w-52 h-16 text-2xl my-5 text-white">Detallar...</button>
                        </div>
                        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/041004da-6d89-4ede-998a-4b4bb0d5e85e/air-jordan-1-mid-se-womens-shoes-wkMdft.png" alt="Nike" />
                    </div>
                    <div className="!flex justify-center items-center flex-wrap">
                        <div className="">
                            <div className="text-5xl font-bold">The best sellers...</div>
                            <div className="my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis facilis temporibus eius doloremque sapiente. Fugit quisquam quis pariatur odit facilis, consequatur sunt esse vero atque velit, exercitationem praesentium, voluptates dignissimos?</div>
                            <button className="rounded-full bg-orange-300 w-52 h-16 text-2xl my-5 text-white">Detallar...</button>
                        </div>
                        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b20c67eb-6f93-4143-b36f-3627af6994d5/air-jordan-1-low-mens-shoes-9xSzrW.png" alt="Nike" />
                    </div>
                </Slider>
            </div>
        );
    }
}