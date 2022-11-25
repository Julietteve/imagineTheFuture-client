import React from 'react';
import Lottie from 'react-lottie';
import loading from "../../animation/loading.json"

function Loading() {

    const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: loading,
		rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice'
		}
	};

    return (

    <div className="page-spinner">
        <Lottie options={defaultOptions}
        height={150}
        width={150}
        />
    </div>
        
    )
}

export default Loading