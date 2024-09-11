'use client'
import React, { useEffect, useRef, useState } from 'react'

export const Iframe = ({ src, }: { src: string, height: Number }) => {
  const ref = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState('0px');

  const onLoad = () => {
    setHeight(ref?.current?.scrollHeight + 'px');
  };
  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div className='text-white'>{height}<iframe
      ref={ref}
      onLoad={onLoad}
      id='iframe'
      src={src}
      height={height}
      style={{
        overflow: "auto",
      }}
      width="605"

    ></iframe>
    </div>

  );

}
