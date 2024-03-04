import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({width, height,src, className }) => {
    return (
        <LazyLoadImage
            className={className || ""}
            alt=""
            width={width}
            height = {height}
            effect="blur"
            src={src}
        />
    );
};

export default Img;