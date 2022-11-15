import React, { useState } from 'react';
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import image1 from '../asset/images/players/player-10.png'

const imgCroper = () => {
    const [crop, setCrop] = useState<crop>('')
    return (
        <div>
              <ReactCrop crop={crop} onChange={c => setCrop(c)}>
      <img src={image1} alt="" />
    </ReactCrop>
  
        </div>
    );
};

export default imgCroper;