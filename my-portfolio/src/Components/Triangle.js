import React from 'react'
import {Stage, Layer, Line} from 'react-konva';

export const Triangles =() => {
        return (
            <Stage width={400} height={180}>
                <Layer>
                    <Line closed points={[0, 180, 120, 60, 400, 180]} fill="lightgray"/>
                </Layer>
                <Layer>
                    <Line closed points={[0, 180, 320, 60, 400, 180]} fill="#311b92"/>
                </Layer>
            </Stage>
        );
    }